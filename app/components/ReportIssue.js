"use client";
import React, { useState } from "react";
import Button from "./Button";
import { useLogout } from "../Contexts/LogoutContext";

const ReportIssue = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { isLoggedIn } = useLogout();

  const handleTextAreaChange = (event) => {
    const text = event.target.value;
    setIsDisabled(text === "");
  };

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-header">
        <p>Let us know about the Issue you are facing right now!</p>
      </div>
      <div className="feedback-form-fields">
        <div className="label-input-div">
          <label>Choose a section</label>
          <select id="selectIssue" value={selectedOption}>
            <option className=" text-medium font-bold" value="option1">
              Interview questions
            </option>
            <option value="option2">Assesment guide</option>
            <option value="option3">Resume review</option>
          </select>
        </div>
        <div className="text-plus-attach">
          <div className="label-input-div">
            <label>
              Describe the issue in detail{" "}
              <span className="mandatory-sign">*</span>
            </label>
            <textarea
              onChange={handleTextAreaChange}
              placeholder="Write here..."
            ></textarea>
          </div>
          <label htmlFor="attachFile" className="attach-file-button">
            <input type="file" id="attachFile" accept="image/*" />
          </label>
        </div>
        {!isLoggedIn && (
          <div className="label-input-div">
            <label>Enter your email to receive an update</label>
            <input type="email" placeholder="Enter your Email"></input>
          </div>
        )}
      </div>
      <div className="form-btn-container">
        <Button disabled={isDisabled} className="form-button" text={"submit"} />
      </div>
    </div>
  );
};

export default ReportIssue;
