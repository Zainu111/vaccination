import React from "react";

const Button = ({ onClick, children, type = "button", className = "", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white border-none rounded-lg cursor-pointer transition-all hover:bg-primary-hover hover:shadow-lg active:scale-95 font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
