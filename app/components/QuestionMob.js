import React from "react";
import Image from "next/image";
import Rocket from "../assets/Frame2211.svg";
import Button from "./Button";
import eyeIcon from "../assets/Vector.svg";

const QuestionMob = ({ date, question }) => {
  return (
    <div className="question-mob">
      <div className="question-mob-header">
        <p>{date}</p>
        <Image width={50} height={50} src={Rocket} alt="icon" />
      </div>
      <div>
        <p className="question-mob-question">{question}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              className={"question-mob-btn"}
              text={"Design"}
              bgColor={"#A9D9FF"}
              textColor={"#2A2A2A"}
            />
            <Button
              text={"UX"}
              bgColor={"#A9D9FF"}
              textColor={"#2A2A2A"}
              className={"question-mob-btn"}
            />
          </div>
          <Button
            text={"easy"}
            bgColor={"#90EE90"}
            textColor={"#2A2A2A"}
            className={"question-mob-btn"}
          />
        </div>
      </div>
      <div className="question-mob-footer">
        <p style={{ color: "#90EE90", fontSize: "12px" }}>23 answers</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Image src={eyeIcon} alt="icon" />
          <p style={{ fontSize: "12px" }}>views</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionMob;
