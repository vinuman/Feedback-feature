import React from "react";
import profilePic from "../assets/Profile.svg";
import EditIcon from "../assets/Edit.svg";
import LikeIcon from "../assets/Like.svg";
import MessageIcon from "../assets/Message.svg";
import Image from "next/image";
import { poppins } from "../layout";
import Button from "./Button";

const Answer = ({ name, date, answer }) => {
  return (
    <div className={`answer-card ${poppins.className}`}>
      <div className="question-section">
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div>
            <Image src={profilePic} alt="profile pic" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <p className="text-regular font-bold">{name}</p>
            <p className="text-medium">{date}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Image src={EditIcon} alt="Edit icon" />
          <p className="text-regular font-semibold">Edit</p>
        </div>
      </div>
      <p className="font-medium text-regular">{answer}</p>
      <div className="answer-end">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            marginRight: "5px",
          }}
        >
          <Image src={LikeIcon} alt="Like button" />
          <p>Like</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src={MessageIcon} alt="Mesasge Icon" />
          <input
            className="answer-comment-field"
            type="text"
            placeholder="Add a comment"
          ></input>
          <Button
            text={"Post"}
            width={"76px"}
            height={"34px"}
            bgColor={"#F5F5F5"}
            textColor={"#4d4d4d"}
            className="post-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Answer;
