"use client";

import React, { useState } from "react";
import FeedbackIcon from "../../assets/FeedbackDesk.svg";
import contactIcon from "../../assets/contact.svg";
import suggestionIcon from "../../assets/suggestion.svg";
import feedback from "../../assets/feedback.svg";
import issueIcon from "../../assets/issue.svg";
import closeIcon from "../../assets/close.svg";
import Image from "next/image";
import ReportIssue from "../ReportIssue";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionSelected, setOptionSelected] = useState(false);

  const handleFeedbackOpen = () => {
    setIsOpen(true);
  };

  const handleFeedbackClose = () => {
    setIsOpen(false);
    setOptionSelected(false);
  };

  const handleOptionSelected = () => {
    setOptionSelected(true);
  };
  return (
    <div className="feedback-container">
      {isOpen && !isOptionSelected && (
        <div
          className={`feedback-vertical ${isOpen && "feedback-vertical-open"}`}
        >
          <div
            onClick={handleOptionSelected}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Report an Issue</div>
            <Image src={issueIcon} alt="issue icon" />
          </div>
          <div
            onClick={handleOptionSelected}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Share Feedback</div>
            <Image src={feedback} alt="feedback icon" />
          </div>
          <div
            onClick={handleOptionSelected}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Give Suggestion</div>
            <Image src={suggestionIcon} alt="suggestion icon" />
          </div>
          <div
            onClick={handleOptionSelected}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Contact Us</div>
            <Image src={contactIcon} alt="contact icon" />
          </div>
          <div className="feedback-icon-container">
            <div className=""></div>
            <Image
              className="fab-button"
              onClick={handleFeedbackClose}
              src={closeIcon}
              alt="close Icon"
            />
          </div>
        </div>
      )}
      {isOptionSelected && (
        <div>
          <div>
            <ReportIssue />
          </div>
          <div className={`feedback-horizontal`}>
            <div className="feedback-horizontal-icon">
              <Image
                height={52}
                width={52}
                src={contactIcon}
                alt="contact icon"
              />
            </div>
            <div className="feedback-icon-container">
              <Image
                height={52}
                width={52}
                src={suggestionIcon}
                alt="contact icon"
              />
            </div>
            <div className="feedback-icon-container">
              <Image
                height={52}
                width={52}
                src={FeedbackIcon}
                alt="contact icon"
              />
            </div>
            <div className="feedback-icon-container">
              <Image
                height={52}
                width={52}
                src={issueIcon}
                alt="contact icon"
              />
            </div>
            <div
              onClick={handleFeedbackClose}
              className="feedback-icon-container"
            >
              <Image
                className="fab-button"
                src={closeIcon}
                alt="contact icon"
              />
            </div>
          </div>
        </div>
      )}
      {!isOpen && !isOptionSelected && (
        <Image
          className="fab-button"
          onClick={handleFeedbackOpen}
          src={FeedbackIcon}
          alt="Feedback Icon"
        />
      )}
    </div>
  );
};

export default Feedback;
