import React, { useState } from "react";
import Header from "./Header";
import background from "../images/netflix-background.jpg";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const handleToggle = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="background" />
      </div>
      <form className=" p-10 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-60 ">
        <h1 className="font-bold text-2xl text-white w-full p-4 ">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-500"
        />
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-500"
          />
        )}
        <input
          type="password"
          placeholder="password"
          className="p-2 m-2 w-full bg-gray-500 "
        />
        <button className="bg-red-700 text-white p-2 m-2 w-full">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-bold text-sm text-white p-4   "
          onClick={handleToggle}
        >
          {isSigninForm
            ? "New to Netflix ? Sign Up now!"
            : "Already Member? Please Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
