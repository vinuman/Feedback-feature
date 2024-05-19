import React from "react";
import { montserrat } from "../layout";
import NavLink from "./NavLink";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";

const NavBar = () => {
  const loggedIn = true;
  return (
    <div className="header">
      <div className="header-left">
        <h1 className={montserrat.className}>
          The{" "}
          <span style={{ backgroundColor: "#F8F8F8", color: "#0F0F0F" }}>
            product
          </span>{" "}
          platform
        </h1>
      </div>
      <div className="header-right">
        <NavLink title="Learn" />
        <NavLink title="Practice" />
        {loggedIn && (
          <div style={{ display: "flex", gap: "10px" }}>
            <CgProfile className="profileIcon" />
            <Button
              text={"logout"}
              width={"100px"}
              height={"30px"}
              bgColor={"#c7c7c7"}
              textColor={"#808080"}
            />
          </div>
        )}
        {!loggedIn && (
          <Button
            text={"login"}
            width={"100px"}
            height={"30px"}
            bgColor={"#c7c7c7"}
            textColor={"#808080"}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
