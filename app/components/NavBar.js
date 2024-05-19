import React from "react";
import { montserrat } from "../layout";
import NavLink from "./NavLink";
import profileIcon from "../assets/Profile.svg";
import Button from "./Button";
import Image from "next/image";

const NavBar = () => {
  const loggedIn = true;
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className={montserrat.className}>
          The{" "}
          <span style={{ backgroundColor: "#F8F8F8", color: "#0F0F0F" }}>
            product
          </span>{" "}
          platform
        </h1>
      </div>
      <div className="navbar-right">
        <NavLink title="Learn" />
        <NavLink title="Practice" />
        {loggedIn && (
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ width: "50x", height: "50px" }}>
              <Image
                width={50}
                height={50}
                src={profileIcon}
                alt="profile-pic"
              />
            </div>
            <Button
              text={"logout"}
              width={"72px"}
              height={"30px"}
              bgColor={"#c7c7c7"}
              textColor={"#2a2a2a"}
              className="nav-btn"
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
