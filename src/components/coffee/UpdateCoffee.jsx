import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Successfully Updated!",
            icon: "success",
          });
        }
        console.log(data);
      });
  };

  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="flex items-center gap-1 my-2 ">
        <FaArrowLeft></FaArrowLeft>
        <NavLink to="/" className="rancho-regular hover:bg-gray-400">
          {" "}
          Back to home
        </NavLink>
      </div>
      <div className="bg-base-200 rounded p-2">
        <div className="text-center lg:w-2/3 mx-auto ">
          <h3 className="rancho-regular text-5xl">
            Update Existing Coffee Details
          </h3>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="mt-[50px]">
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Coffee Name"
                  defaultValue={coffee.name}
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  className="input w-full"
                  placeholder="My awesome page"
                  defaultValue={coffee.chef}
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="input w-full"
                  placeholder="Supplier"
                  defaultValue={coffee.supplier}
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Coffee Taste"
                  defaultValue={coffee.taste}
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="Price"
                  defaultValue={coffee.price}
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Details"
                  defaultValue={coffee.details}
                />
              </fieldset>
            </div>
            <fieldset className="fieldset bg-base-200 p-4 my-4">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
                defaultValue={coffee.photo}
              />
            </fieldset>
            <input
              className="rancho-regular btn w-full text-2xl bg-orange-500"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
