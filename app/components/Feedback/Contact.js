import React, { useState, useEffect } from "react";
import { useLogout } from "../../Contexts/LogoutContext";
import Button from "../Button";
import validator from "validator";
import { useFeedback } from "@/app/Contexts/FeedBackContext";

const Contact = ({ onContact }) => {
  const { state, dispatch } = useFeedback(); // Access feedback context
  const { contactUs } = state;
  const { name, email, text, emailInvalid, isDisabled } = contactUs;

  const { isLoggedIn } = useLogout();

  const handleTextAreaChange = (event) => {
    const textValue = event.target.value;
    dispatch({ type: "UPDATE_CONTACT_US", payload: { text: textValue } });
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isInvalid = !validator.isEmail(emailValue);
    dispatch({
      type: "UPDATE_CONTACT_US",
      payload: { email: emailValue, emailInvalid: isInvalid },
    });
  };

  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    dispatch({ type: "UPDATE_CONTACT_US", payload: { name: nameValue } });
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch({
        type: "UPDATE_CONTACT_US",
        payload: { isDisabled: name === "" || text === "" },
      });
    } else {
      dispatch({
        type: "UPDATE_CONTACT_US",
        payload: {
          isDisabled:
            name === "" ||
            text === "" ||
            email === "" ||
            !validator.isEmail(email),
        },
      });
    }
  }, [text, name, email, isLoggedIn, dispatch]);

  return (
    <div className="feedback-form-container">
      <div className="feedback-form-header">
        <p>Let us know what your queries are!</p>
      </div>
      <div className="feedback-form-fields">
        <div className="label-input-div">
          <label>
            Your Name <span className="mandatory-sign">*</span>
          </label>
          <input
            onChange={handleNameChange}
            value={name}
            type="text"
            placeholder="Enter your Name"
          ></input>
        </div>
        {!isLoggedIn && (
          <>
            {" "}
            <div className="label-input-div">
              <label>
                Your Email <span className="mandatory-sign">*</span>
              </label>
              <input
                autoComplete="new-email"
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
            <div className="label-input-div">
              <label>Your Mobile number</label>
              <input type="number" placeholder="Enter your Number"></input>
            </div>
          </>
        )}
        <div className="label-input-div">
          <label>
            What would you like to ask?{" "}
            <span className="mandatory-sign">*</span>
          </label>
          <textarea
            onChange={handleTextAreaChange}
            value={text}
            placeholder="Write here..."
          ></textarea>
        </div>
      </div>
      <div className="form-btn-container">
        <Button
          onClick={onContact}
          disabled={isDisabled}
          className="form-button"
          text={"submit"}
        />
      </div>
    </div>
  );
};

export default Contact;
