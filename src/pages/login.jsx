import React from "react";
import LoginForm from "../components/organisms/LoginForm";
import AuthLayout from "../components/templates/AuthLayouts";

function LoginPage() {
  return (
    <div>
      <AuthLayout title="Login" type="login">
        <LoginForm />
      </AuthLayout>
    </div>
  );
}

export default LoginPage;
