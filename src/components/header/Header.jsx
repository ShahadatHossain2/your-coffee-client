import React from "react";
import logo from "../../assets/images/more/logo1.png";
import background from "../../assets/images/more/15.jpg";

const Header = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="rancho-regular flex h-30 bg-coffee justify-center items-center"
      >
        <img className="w-[75px] h-[90px]" src={logo} alt="" />
        <h3 className="text-6xl text-white">Your Coffee</h3>
      </div>
    </div>
  );
};

export default Header;
