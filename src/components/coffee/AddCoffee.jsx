import React from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    console.log(coffeeData);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Successfully added!",
          icon: "success",
        });
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center gap-1 my-2 ">
        <FaArrowLeft></FaArrowLeft>
        <NavLink to="/" className="rancho-regular hover:bg-gray-400">
          {" "}
          Back to home
        </NavLink>
      </div>
      <div className="text-center py-10 lg:w-2/3 mx-auto ">
        <h3 className="rancho-regular text-5xl">Add New Coffee</h3>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              className="input w-full"
              placeholder="My awesome page"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details"
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
          />
        </fieldset>
        <input
          className="rancho-regular btn w-full text-2xl bg-orange-500"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
