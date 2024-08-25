import React from "react";
import AuthLayout from "../components/templates/AuthLayouts";
import RegisterForm from "../components/organisms/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <AuthLayout title="Register" type="register">
        <RegisterForm />
      </AuthLayout>
    </div>
  );
}

export default RegisterPage;
