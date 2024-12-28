import React from "react";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button onClick={() => alert("click")}>{text}</button>;
}

export default Button;
