import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useRevalidator } from "react-router";
import Swal from "sweetalert2";

const ViewCoffee = ({ coffees }) => {
  const revalidator = useRevalidator();
  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success",
            });
            revalidator.revalidate();
          });
      }
    });
  };
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/coffee/${id}`);
  };
  return (
    <div>
      <div className="text-center my-5">
        <p>--- Sip & Savor ---</p>
        <h3 className="rancho-regular text-5xl text-[#331A15] my-2">
          Our Popular Products
        </h3>
        <Link className="btn bg-[#E3B577] hover:bg-[#F5F4F1]" to="/addCoffee">
          Add Coffee
        </Link>
      </div>
      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="flex items-center bg-[#F5F4F1] rounded-xl gap-4 p-2"
          >
            <div>
              <img src={coffee.photo} alt="" />
            </div>
            <div className="w-full">
              <p>
                <span className="font-bold">Name:</span> {coffee.name}
              </p>
              <p>
                <span className="font-bold">Chef:</span> {coffee.chef}
              </p>
              <p>
                <span className="font-bold">Price: $</span> {coffee.price}
              </p>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => handleNavigate(coffee._id)}
                className="border cursor-pointer  border-gray-200 p-1 rounded bg-gray-400"
              >
                <FaEye fill="pink"></FaEye>
              </button>
              <Link
                to={`/update/${coffee._id}`}
                className="border cursor-pointer  border-gray-200 p-1 rounded my-1 bg-blue-400"
              >
                <FaEdit></FaEdit>
              </Link>
              <button
                onClick={() => handleDelete(coffee._id)}
                className="cursor-pointer border border-gray-200 p-1 rounded my-1 bg-red-400"
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCoffee;
