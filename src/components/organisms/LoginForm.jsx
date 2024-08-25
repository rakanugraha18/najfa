import React from "react";
import InputForm from "../molecules/InputForm";
import Button from "../atoms/Button";

function LoginForm() {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="email"
        placeholder="Enter email"
        type="email"
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="********"
        type="password"
      />
      <Button type="submit" classname="bg-blue-600 w-full">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
