import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  activeTab: null,

  reportIssue: {
    selectedOption: "",
    text: "",
    email: "",
  },
  shareFeedback: {
    text: "",
    email: "",
  },
  giveSuggestion: {
    text: "",
    email: "",
  },
  contactUs: {
    text: "",
    email: "",
    name: "",
  },
};

const UPDATE_REPORT_ISSUE = "UPDATE_REPORT_ISSUE";
const UPDATE_SHARE_FEEDBACK = "UPDATE_SHARE_FEEDBACK";
const UPDATE_GIVE_SUGGESTION = "UPDATE_GIVE_SUGGESTION";
const UPDATE_CONTACT_US = "UPDATE_CONTACT_US";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const RESET_STATE = "RESET_STATE";

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case UPDATE_REPORT_ISSUE:
      return {
        ...state,
        reportIssue: { ...state.reportIssue, ...action.payload },
      };
    case UPDATE_SHARE_FEEDBACK:
      return {
        ...state,
        shareFeedback: { ...state.shareFeedback, ...action.payload },
      };
    case UPDATE_GIVE_SUGGESTION:
      return {
        ...state,
        giveSuggestion: { ...state.giveSuggestion, ...action.payload },
      };
    case UPDATE_CONTACT_US:
      return {
        ...state,
        contactUs: { ...state.contactUs, ...action.payload },
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);
  return (
    <FeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
