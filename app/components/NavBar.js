import React from "react";
import { montserrat } from "../layout";
import NavLink from "./NavLink";
import profileIcon from "../assets/Profile.svg";
import Button from "./Button";
import Image from "next/image";
import { useLogout } from "../Contexts/LogoutContext";
import { dimmedStyle } from "../utils/utils";

const NavBar = () => {
  const { isLoggedIn, logout, isBgDimmed } = useLogout();
  return (
    <div style={isBgDimmed ? dimmedStyle : {}} className="navbar">
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
        <div className="nav-links">
          <NavLink title="Learn" />
          <NavLink title="Practice" />
        </div>
        {isLoggedIn && (
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
              textColor={"#808080"}
              className="nav-btn"
              onClick={logout}
            />
          </div>
        )}
        {!isLoggedIn && (
          <Button
            text={"login"}
            width={"100px"}
            height={"30px"}
            bgColor={"#c7c7c7"}
            textColor={"#808080"}
            className="nav-btn"
            onClick={logout}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
