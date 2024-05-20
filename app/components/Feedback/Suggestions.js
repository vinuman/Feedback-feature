"use client";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useLogout } from "../../Contexts/LogoutContext";
import validator from "validator";
import { useFeedback } from "@/app/Contexts/FeedBackContext";

const Suggestions = ({ onGiveSuggestions }) => {
  const { state, dispatch } = useFeedback();
  const { giveSuggestion } = state;
  const { selectedOption, text, email, emailInvalid, isDisabled } =
    giveSuggestion;
  const { isLoggedIn } = useLogout();

  const handleTextAreaChange = (event) => {
    const textActual = event.target.value;
    dispatch({ type: "UPDATE_GIVE_SUGGESTION", payload: { text: textActual } });
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isInvalid = !validator.isEmail(emailValue);
    dispatch({
      type: "UPDATE_GIVE_SUGGESTION",
      payload: { email: emailValue, emailInvalid: isInvalid },
    });
  };

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    dispatch({
      type: "UPDATE_GIVE_SUGGESTION",
      payload: { selectedOption: optionValue },
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch({
        type: "UPDATE_GIVE_SUGGESTION",
        payload: { isDisabled: text === "" },
      });
    } else {
      dispatch({
        type: "UPDATE_GIVE_SUGGESTION",
        payload: {
          isDisabled: text === "" || email === "" || !validator.isEmail(email),
        },
      });
    }
  }, [email, text, isLoggedIn, dispatch]);

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-header">
        <p>Share your Suggestions with us for a chance to earn rewards!</p>
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
              Describe the suggestion in detail{" "}
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
            <label>
              Enter your email to receive an update{" "}
              <span className="mandatory-sign">*</span>
            </label>
            <input
              autoComplete="off"
              onChange={handleEmailChange}
              value={email}
              type="email"
              placeholder="Enter your Email"
            ></input>
            {emailInvalid && (
              <p style={{ color: "#fd443a", fontSize: "14px" }}>
                Invalid Email
              </p>
            )}
          </div>
        )}
      </div>
      <div className="form-btn-container">
        <Button
          onClick={onGiveSuggestions}
          disabled={isDisabled}
          className="form-button"
          text={"submit"}
        />
      </div>
    </div>
  );
};

export default Suggestions;
