"use client";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useLogout } from "../../Contexts/LogoutContext";
import { useFeedback } from "@/app/Contexts/FeedBackContext";

const ReportIssue = ({ onReportSubmit }) => {
  const { state, dispatch } = useFeedback();
  const { reportIssue } = state;
  const { selectedOption, text } = reportIssue;
  const { isLoggedIn } = useLogout();

  const handleTextAreaChange = (event) => {
    const textActual = event.target.value;
    dispatch({ type: "UPDATE_REPORT_ISSUE", payload: { text: textActual } });
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    dispatch({
      type: "UPDATE_REPORT_ISSUE",
      payload: { selectedOption: option },
    });
  };

  useEffect(() => {
    if (text !== "") {
      dispatch({ type: "UPDATE_REPORT_ISSUE", payload: { isDisabled: false } });
    } else {
      dispatch({ type: "UPDATE_REPORT_ISSUE", payload: { isDisabled: true } });
    }
  }, [text, dispatch]);

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-header">
        <p>Let us know about the Issue you are facing right now!</p>
      </div>
      <div className="feedback-form-fields">
        <div className="label-input-div">
          <label>Choose a section</label>
          <select
            id="selectIssue"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option className=" text-medium font-bold" value="option1">
              Interview questions
            </option>
            <option value="option2">Assessment guide</option>
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
              value={text}
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
            <input
              autoComplete="off"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_REPORT_ISSUE",
                  payload: { email: e.target.value },
                })
              }
            />
          </div>
        )}
      </div>
      <div className="form-btn-container">
        <Button
          onClick={onReportSubmit}
          disabled={reportIssue.isDisabled}
          className="form-button"
          text={"submit"}
        />
      </div>
    </div>
  );
};

export default ReportIssue;
