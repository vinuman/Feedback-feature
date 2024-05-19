import React from "react";
import { poppins } from "../layout";
import { FaArrowLeftLong } from "react-icons/fa6";
import Question from "../components/Question";
import { tagsArray } from "../utils/utils";
import Answer from "../components/Answer";
import { AnswerList } from "../utils/utils";

const AnswersPage = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <FaArrowLeftLong
          style={{ color: "#fefefe", width: "40px", height: "40px" }}
        />
        <h2 className={poppins.className}>Back to Questions</h2>
      </div>
      <Question
        tagsArray={tagsArray}
        title={
          "A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? "
        }
        description={
          "In an era where convenience and personalized services are paramount, the partnership between a travel startup and Amazon to pre-install their personal travel agent bot on existing Amazon Echos opens up a world of possibilities. "
        }
        views={100}
      />

      {AnswerList.map((answer) => (
        <Answer
          key={answer.id}
          name={answer.name}
          date={answer.date}
          answer={answer.answer}
        />
      ))}
    </>
  );
};

export default AnswersPage;
