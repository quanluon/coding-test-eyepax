import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} ${props.disabled ? "bg-red-400" : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
