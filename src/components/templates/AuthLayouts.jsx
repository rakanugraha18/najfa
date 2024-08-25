import React from "react";
import { Link } from "react-router-dom";

function AuthLayout(props) {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />

        {/* Conditional rendering operator ternary */}
        {/* <p className="text-slate-500 my-6">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          {type === "login" && (
            <Link className="text-blue-600" to="/register">
              {" "}
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="text-blue-600" to="/login">
              {" "}
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  // Conditional rendering if else
  if (type == "login") {
    return (
      <p className="text-slate-500 my-6">
        Don't have an account?
        <Link className="text-blue-600" to="/register">
          {" "}
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 my-6">
        Already have an account?
        <Link className="text-blue-600" to={"/login"}>
          {" "}
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
