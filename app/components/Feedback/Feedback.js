"use client";

import React, { useState } from "react";
import FeedbackIcon from "../../assets/FeedbackDesk.svg";
import contactIcon from "../../assets/contact.svg";
import suggestionIcon from "../../assets/suggestion.svg";
import feedback from "../../assets/feedback.svg";
import issueIcon from "../../assets/issue.svg";
import closeIcon from "../../assets/close.svg";
import Image from "next/image";
import ReportIssue from "./ReportIssue";
import ShareFeedback from "./ShareFeedback";
import Suggestions from "./Suggestions";
import Contact from "./Contact";
import DialogBox from "./DialogueBox";
import { useFeedback } from "@/app/Contexts/FeedBackContext";

const Feedback = () => {
  const { state, dispatch } = useFeedback();
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionSelected, setOptionSelected] = useState(false);
  const [isSubmissionSuccess, setIsSubmissionSucces] = useState(false);
  const [submitFeedback, setSubmitSuccess] = useState("");

  const handleFeedbackOpen = () => {
    setIsOpen(true);
  };

  const handleFeedbackClose = () => {
    setIsOpen(false);
    setOptionSelected(false);
    setIsSubmissionSucces(false);
    dispatch({ type: "RESET_STATE" });
  };

  const handleOptionSelected = () => {
    setOptionSelected(true);
  };

  const handleSubmit = (message) => {
    setIsOpen(false);
    setOptionSelected(false);
    setSubmitSuccess(message);
    setIsSubmissionSucces(true);
    dispatch({ type: "RESET_STATE" });
    setTimeout(() => {
      setIsSubmissionSucces(false);
      setSubmitSuccess("");
    }, 5000);
  };

  const onReportSubmit = () => {
    handleSubmit(
      "Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!"
    );
  };

  const onShareFeedback = () => {
    handleSubmit("Thanks for your valuable feedback!");
  };

  const onGiveSuggestions = () => {
    handleSubmit("Thanks for your valuable Suggestion!");
  };

  const onContact = () => {
    handleSubmit(
      "Thanks for reaching out to us! We will get back to you as soon as possible"
    );
  };

  return (
    <div className="feedback-container">
      {isOpen && !isOptionSelected && (
        <div
          className={`feedback-vertical ${isOpen && "feedback-vertical-open"}`}
        >
          <div
            onClick={() => {
              handleOptionSelected();
              dispatch({ type: "SET_ACTIVE_TAB", payload: "reportIssue" });
            }}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Report an Issue</div>
            <Image src={issueIcon} alt="issue icon" />
          </div>
          <div
            onClick={() => {
              handleOptionSelected();
              dispatch({ type: "SET_ACTIVE_TAB", payload: "shareFeedback" });
            }}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Share Feedback</div>
            <Image src={feedback} alt="feedback icon" />
          </div>
          <div
            onClick={() => {
              handleOptionSelected();
              dispatch({ type: "SET_ACTIVE_TAB", payload: "giveSuggestion" });
            }}
            className="feedback-icon-container"
          >
            <div className="feedback-label">Give Suggestion</div>
            <Image src={suggestionIcon} alt="suggestion icon" />
          </div>
          <div
            onClick={() => {
              handleOptionSelected();
              dispatch({ type: "SET_ACTIVE_TAB", payload: "contactUs" });
            }}
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
          {state.activeTab === "reportIssue" && (
            <ReportIssue onReportSubmit={onReportSubmit} />
          )}
          {state.activeTab === "shareFeedback" && (
            <ShareFeedback onShareFeedback={onShareFeedback} />
          )}
          {state.activeTab === "giveSuggestion" && (
            <Suggestions onGiveSuggestions={onGiveSuggestions} />
          )}
          {state.activeTab === "contactUs" && <Contact onContact={onContact} />}

          <div className={`feedback-horizontal`}>
            <div
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_TAB", payload: "contactUs" })
              }
              className={` ${
                state.activeTab === "contactUs" && "horizontal-icon"
              }`}
            >
              <Image
                height={52}
                width={52}
                src={contactIcon}
                alt="contact icon"
              />
            </div>
            <div
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_TAB", payload: "giveSuggestion" })
              }
              className={` ${
                state.activeTab === "giveSuggestion" && "horizontal-icon"
              }`}
            >
              <Image
                height={52}
                width={52}
                src={suggestionIcon}
                alt="contact icon"
              />
            </div>
            <div
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_TAB", payload: "shareFeedback" })
              }
              className={` ${
                state.activeTab === "shareFeedback" && "horizontal-icon"
              }`}
            >
              <Image
                height={52}
                width={52}
                src={feedback}
                alt="feedback icon"
              />
            </div>
            <div
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_TAB", payload: "reportIssue" })
              }
              className={` ${
                state.activeTab === "reportIssue" && "horizontal-icon"
              }`}
            >
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
      {isSubmissionSuccess && <DialogBox message={submitFeedback} />}
    </div>
  );
};

export default Feedback;
