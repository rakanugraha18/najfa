import React from "react";
import InputForm from "../molecules/InputForm";
import Button from "../atoms/Button";

function RegisterForm() {
  return (
    <div>
      <form action="">
        <InputForm
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          type="text"
        />
        <InputForm
          label="Last Name"
          name="lastName"
          placeholder="Enter Last name"
          type="text"
        />
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
        <InputForm
          label="Confirm Password"
          name="confirmPassword"
          placeholder="********"
          type="confirmPassword"
        />
        <Button type="submit" classname="bg-blue-600 w-full">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
