import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/Context";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    loginUser(email, password)
      .then((result) => {
        const userLoginInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userLoginInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log("After patch : ", data));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={handleLogin} className="w-1/2 mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            New here? please{" "}
            <Link className="text-blue-500 " to="/signIn">
              Sign Up
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
