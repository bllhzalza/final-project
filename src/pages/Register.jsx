import React from "react";
import "../components/Register.css";

const Register = () => {
  return (
    <div className="body-regist flex w-full h-screen items-center justify-center">
      <div className="flex min-w-full items-center justify-center lg:flex">
        <div className="wrap-regist">
          <div className="form-regist">
            <form action="">
              <div className="w-full flex font-bold mb-3 text-2xl justify-center">
                Create Account
                </div>

              <input
                className="input-regist h-8"
                type="text"
                placeholder="Fullname"
                required
              ></input>

              <input
                className="input-regist h-8"
                type="text"
                placeholder="Email"
                required
              ></input>

              <input
                className="input-regist h-8"
                type="text"
                placeholder="Phone Number"
                required
              ></input>

              <input
                className="input-regist h-8"
                type="text"
                placeholder="Password"
                required
              ></input>

              <input
                className="input-regist h-8"
                type="text"
                placeholder="Confirm Password"
                required
              ></input>

              <div className="w-full flex items-start my-1">
                <input type="checkbox" />
                <p className="text"> Agree with <a href="#"> Terms & Condition </a></p>
              </div>

              <div className="flex justify-center">
              <button className="button-regist flex items-center justify-center shadow-md" type="submit">
              <p className="text-sm">Create an Account</p>
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
