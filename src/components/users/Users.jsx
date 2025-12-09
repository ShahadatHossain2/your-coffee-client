import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useLoaderData, useRevalidator } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const users = useLoaderData();
  const revalidator = useRevalidator();
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            revalidator.revalidate();
            console.log(data);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex items-center gap-1 my-2 ">
        <FaArrowLeft></FaArrowLeft>
        <NavLink to="/" className="rancho-regular hover:bg-gray-400">
          {" "}
          Back to home/
        </NavLink>
      </div>
      <div>
        <h3>User: {users.length}</h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.photo} alt="user" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.address}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.phone}
                    </span>
                  </td>
                  <th>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      X
                    </button>
                    <button className="btn btn-ghost btn-xs">Update</button>
                    <button className="btn btn-ghost btn-xs">V</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
