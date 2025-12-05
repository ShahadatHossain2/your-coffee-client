import React from "react";
import homeBg from "../../assets/images/more/3.png";
import ViewCoffee from "../coffee/ViewCoffee";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-cover bg-no-repeat h-screen relative"
      >
        <div className="w-1/2 mx-auto py-10 md:absolute md:top-1/2 md:right-5 md:-translate-y-1/2">
          <h3 className="rancho-regular font-bold text-white md:text-5xl pb-3">
            Would you like a Cup of Delicious Coffee?
          </h3>
          <p className="text-white pb-3 text-[10px] md:text-[16px]">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="rancho-regular btn bg-[#E3B577]">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <ViewCoffee coffees={coffees}></ViewCoffee>
      </div>
    </div>
  );
};

export default Home;
