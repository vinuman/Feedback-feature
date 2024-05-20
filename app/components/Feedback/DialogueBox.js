import React from "react";

const DialogBox = ({ message }) => {
  return (
    <div className="dialog-box">
      <p>{message}</p>
      <div className="dialog-box-pointer"></div>
    </div>
  );
};

export default DialogBox;
