import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function InputForm(props) {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input placeholder={placeholder} name={name} type={type} />
    </div>
  );
}

export default InputForm;
