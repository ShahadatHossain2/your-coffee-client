import React from "react";
import logo from "../../assets/images/more/logo1.png";
import footerBg from "../../assets/images/more/13.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin, FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerBg})` }} className="bg-cover">
      <div className="flex mt-10 w-11/12 mx-auto text-[#331A15]">
        <div>
          <div>
            <img className="w-19" src={logo} alt="" />
            <h3 className="rancho-regular font-bold text-[45px]">
              Your Coffee
            </h3>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-2 my-4">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaYoutube></FaYoutube>
            </div>
            <h3 className="rancho-regular font-bold text-[45px]">
              Get in Touch
            </h3>
            <div className="flex gap-2">
              <div>
                <FaPhone className="my-2"></FaPhone>
                <FaMessage></FaMessage>
                <FaLocationPin className="mt-1"></FaLocationPin>
              </div>
              <div>
                <p>+8801875446987</p>
                <p>info@gmail.com</p>
                <p>Dhaka</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Message</label>
                <input
                  type="message"
                  className="input input-xl"
                  placeholder="Message"
                />
                <button className="btn btn-neutral mt-4">Send Message</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
