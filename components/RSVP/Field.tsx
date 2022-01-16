import React, { FC } from "react";
import { FieldProps } from "formik";

interface CustomInputComponent {
  type?: string;
}

const CustomInputComponent: FC<CustomInputComponent & FieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type = "text",
  ...props
}) => (
  <div>
    <input type={type} {...field} {...props} />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);
