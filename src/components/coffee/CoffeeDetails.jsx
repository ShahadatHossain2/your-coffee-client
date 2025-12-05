import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-center gap-1 my-2">
        <FaArrowLeft></FaArrowLeft>
        <NavLink to="/" className="rancho-regular hover:bg-gray-400">
          {" "}
          Back to home
        </NavLink>
      </div>
      <div className="md:flex items-center border bg-[#F5F4F1] rounded-xl gap-4 p-2 w-8/12 mx-auto my-10">
        <div className="md:w-2/5">
          <img src={coffee.photo} alt="" />
        </div>
        <div>
          <h3 className="rancho-regular text-2xl my-1">Niceties</h3>
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
      </div>
    </div>
  );
};

export default CoffeeDetails;
