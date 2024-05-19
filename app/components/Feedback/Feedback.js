"use client";

import React, { useState } from "react";
import FeedbackIcon from "../../assets/FeedbackDesk.svg";
import contactIcon from "../../assets/contact.svg";
import suggestionIcon from "../../assets/suggestion.svg";
import feedback from "../../assets/feedback.svg";
import issueIcon from "../../assets/issue.svg";
import closeIcon from "../../assets/close.svg";
import Image from "next/image";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFeedbackOpen = () => {
    setIsOpen(true);
  };

  const handleFeedbackClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="feedback-container">
      {isOpen && (
        <div className="feedback-vertical">
          <div className="feedback-icon-container">
            <div className="feedback-label">Report an Issue</div>
            <Image src={issueIcon} alt="issue icon" />
          </div>
          <div className="feedback-icon-container">
            <div className="feedback-label">Share Feedback</div>
            <Image src={feedback} alt="feedback icon" />
          </div>
          <div className="feedback-icon-container">
            <div className="feedback-label">Give Suggestion</div>
            <Image src={suggestionIcon} alt="suggestion icon" />
          </div>
          <div className="feedback-icon-container">
            <div className="feedback-label">Contact Us</div>
            <Image src={contactIcon} alt="contact icon" />
          </div>
          <div className="feedback-icon-container">
            <div className=""></div>
            <Image
              onClick={handleFeedbackClose}
              src={closeIcon}
              alt="close Icon"
            />
          </div>
        </div>
      )}
      {!isOpen && (
        <Image
          onClick={handleFeedbackOpen}
          src={FeedbackIcon}
          alt="close Icon"
        />
      )}
    </div>
  );
};

export default Feedback;
