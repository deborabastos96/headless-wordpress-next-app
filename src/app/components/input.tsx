import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  required?: boolean | undefined;
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
};

export default function Input({
  required,
  type,
  name,
  placeholder,
  id,
  className,
}: InputProps) {
  return (
    <input
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className={`border shadow-sm rounded-full  outline-0 py-3 px-4 hover:border-violet-800 focus:border-violet-800 mb-6 mt-1 ${
        className || ""
      }`}
    />
  );
}
