import React from "react";
import { poppins } from "../layout";
import { FaArrowLeftLong } from "react-icons/fa6";
import Question from "../components/Question";
import { tagsArray } from "../utils/utils";
import Answer from "../components/Answer";
import { AnswerList } from "../utils/utils";
import Button from "../components/Button";
import FilterList from "../components/FilterList";
import { categories } from "../utils/utils";
import { questions } from "../utils/utils";
import QuestionMob from "../components/QuestionMob";

const AnswersPage = () => {
  return (
    <>
      <div className="answers-desktop">
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
      </div>
      <div className="answers-mobile">
        <h2 className={poppins.className}>Practice Interview Questions</h2>
        <div className="mob-desc">
          <p>Embark on an Exploration: 800 Questions Await</p>
          <Button
            className="filter-btn"
            text={"filter"}
            width={"100px"}
            height={"28px"}
          />
        </div>
        {categories.map((item, index) => (
          <FilterList title={item} key={index} />
        ))}
        {questions.map((question) => (
          <QuestionMob
            date={question.date}
            question={question.question}
            key={question.id}
          />
        ))}
      </div>
    </>
  );
};

export default AnswersPage;
