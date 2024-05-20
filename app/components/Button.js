import React from "react";

const Button = ({
  text,
  width,
  height,
  bgColor,
  textColor,
  className,
  disabled,
  onClick,
}) => {
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
    // Use the disabled prop directly to conditionally apply the disabled attribute
    <button
      onClick={onClick}
      style={buttonStyle}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
