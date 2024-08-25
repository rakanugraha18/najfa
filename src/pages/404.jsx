import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  return (
    <div className=" flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Oops! 404</h1>
      <p className="text-slate-500 my-6">
        Sorry, unexpected error has occurred
      </p>
    </div>
  );
}

export default ErrorPage;
