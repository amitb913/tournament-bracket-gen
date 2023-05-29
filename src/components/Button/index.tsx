import React from "react";
import "./Button.scss";

type ButtonProps = {
  children: string; // or icon
  onClick?: () => void;
  style?: React.CSSProperties;
};
const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <div className="buttonContainer" style={style} onClick={onClick}>
      <h3 className="buttonText">{children}</h3>
    </div>
  );
};

export default Button;
