import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const NavLink = ({ title }) => {
  return (
    <div style={{ display: "flex", gap: "5px", paddingTop: "5px" }}>
      <div style={{ color: " #808080" }}>{title}</div>
      <FaChevronDown className="chevronDown" />
    </div>
  );
};

export default NavLink;
