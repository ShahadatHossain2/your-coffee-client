import React, { use } from "react";
import { AuthContext } from "../context/Context";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router";

const SignIn = () => {
  const { signInWithGoogle, createUser, user } = use(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...userFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Successfully Created!",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center my-10">
      <div className="flex items-center gap-1 my-2 ">
        <FaArrowLeft></FaArrowLeft>
        <NavLink to="/" className="rancho-regular hover:bg-gray-400">
          {" "}
          Back to home
        </NavLink>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] mb-5"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Sign In with google
      </button>
      <form onSubmit={handleCreateUser} className="w-1/2 mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />
          <label className="label">Phone No</label>
          <input
            type="text"
            className="input"
            placeholder="Phone No"
            name="phone"
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            placeholder="Address"
            name="address"
          />
          <label className="label">Photo Url</label>
          <input
            type="text"
            className="input"
            placeholder="Photo Url"
            name="photo"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">SignUp</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
