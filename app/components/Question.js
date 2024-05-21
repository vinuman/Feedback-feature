import React from "react";
import Button from "./Button";
import rocketIcon from "../assets/Frame2211.svg";
import Image from "next/image";
import eyeIcon from "../assets/Vector.svg";
import infoIcon from "../assets/Info.png";
import { poppins } from "../layout";

const Question = ({ tagsArray, title, description, views }) => {
  return (
    <div className="question-card">
      <div className={`question-section`}>
        {" "}
        <div className="tagsArrayDiv">
          {tagsArray.map((item, index) => (
            <div key={index}>
              <Button
                text={item}
                width={"auto"}
                height={"40px"}
                bgColor={"#A9D9FF"}
                textColor={"#2A2A2A"}
                className="tags-btn"
              />
            </div>
          ))}
        </div>
        <Image src={rocketIcon} alt="rocket icon" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3 className={poppins.className}>{title}</h3>
        <p
          className={`${poppins.className} text-regular`}
          style={{ paddingBottom: "20px" }}
        >
          {description}
        </p>
      </div>
      <div className="question-section">
        <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
          <Image src={eyeIcon} alt="view icon" />
          <p className={`${poppins.className} text-medium`}>{views} views</p>
        </div>
        <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
          <Image src={infoIcon} alt="info icon" />
          <p className={`${poppins.className} text-medium`}>
            How should you word your answer?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
