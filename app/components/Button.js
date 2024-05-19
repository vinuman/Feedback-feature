import React from "react";

const Button = ({ text, width, height, bgColor, textColor }) => {
  const buttonStyle = {
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
    border: "none",
    borderRadius: "4px",
    fontWeight: "500",
  };
  return (
    <button style={buttonStyle} className="custom-button">
      {text}
    </button>
  );
};

export default Button;
