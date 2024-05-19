import React from "react";

const Button = ({ text, width, height, bgColor, textColor, className }) => {
  const buttonStyle = {
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "4px",
    fontWeight: "500",
    outline: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} className={className}>
      {text}
    </button>
  );
};

export default Button;
