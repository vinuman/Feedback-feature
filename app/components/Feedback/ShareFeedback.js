"use client";
import { useState, useEffect } from "react";
import React from "react";
import Button from "../Button";
import { useLogout } from "../../Contexts/LogoutContext";
import validator from "validator";
import { useFeedback } from "@/app/Contexts/FeedBackContext";

const ShareFeedback = ({ onShareFeedback }) => {
  const { state, dispatch } = useFeedback();
  const { shareFeedback } = state;
  const { email, text, emailInvalid, isDisabled } = shareFeedback;
  const { isLoggedIn } = useLogout();

  const handleTextAreaChange = (event) => {
    const textActual = event.target.value;
    dispatch({ type: "UPDATE_SHARE_FEEDBACK", payload: { text: textActual } });
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isInvalid = !validator.isEmail(emailValue);
    dispatch({
      type: "UPDATE_SHARE_FEEDBACK",
      payload: { email: emailValue, emailInvalid: isInvalid },
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch({
        type: "UPDATE_SHARE_FEEDBACK",
        payload: { isDisabled: text === "" },
      });
    } else {
      dispatch({
        type: "UPDATE_SHARE_FEEDBACK",
        payload: {
          isDisabled: text === "" || email === "" || !validator.isEmail(email),
        },
      });
    }
  }, [email, text, isLoggedIn, dispatch]);

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-header">
        <p>Let us know your Feedback about us!</p>
      </div>
      <div className="feedback-form-fields">
        <div className="text-plus-attach">
          <div className="label-input-div">
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
      {isLoggedIn && (
        <div className="checkbox-div">
          <input type="checkbox"></input>
          <label>Send feedback anonymously</label>
        </div>
      )}

      <div className="form-btn-container">
        <Button
          onClick={onShareFeedback}
          disabled={isDisabled}
          className="form-button"
          text={"submit"}
        />
      </div>
    </div>
  );
};

export default ShareFeedback;
