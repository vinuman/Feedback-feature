import React from "react";
import DropDown from "../assets/DropDown.svg";
import Image from "next/image";

const FilterList = ({ title }) => {
  return (
    <div className="filter-list">
      <p style={{ minWidth: "150px", fontSize: "16px" }}>{title}</p>
      <Image src={DropDown} alt="drop down icon" />
    </div>
  );
};

export default FilterList;
