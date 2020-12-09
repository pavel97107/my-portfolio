import React, { useState } from "react";
import { Faq } from "./styles/faqSection";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../../hooks";
//animation
import { scrollReveal } from "../../animation";
export default () => {
  const [questionList, setQuestionList] = useState([
    {
      active: false,
      id: 1,
      title: "How long have I been web development?",
      answer:
        " I have been developing for about a year, took courses in an IT INCUBATOR, I have several educational works, I apply for the position of a junior front-end developer",
    },
    {
      active: false,
      id: 2,
      title: "Where did I study, where did I work, tell us about yourself?",
      answer:
        " I have a vocational education, studied at the University of BRU (Civil Engineer), but unfortunately or fortunately did not graduate from it.",
    },
    {
      active: false,
      id: 3,
      title: "What are you striving for?",
      answer:
        " I strive to become a specialist who is well versed in web development, regardless of whether it is a front-end or a backend.",
    },
    {
      active: false,
      id: 4,
      title: "The dream Team?",
      answer:
        "I want to work with people who know their business. To interact with them and gain new knowledge.",
    },
  ]);

  const [element, controls] = useScroll();

  const setActiveQuestionHandler = (id) => {
    const updateQuestionList = questionList.map((question) => {
      if (id === question.id) {
        if (question.active) {
          return { ...question, active: false };
        }
        return { ...question, active: true };
      }
      return question;
    });

    setQuestionList(updateQuestionList);
  };

  return (
    <Faq ref={element} variants={scrollReveal} animate={controls}>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="questions">
        <AnimateSharedLayout>
          {questionList.map((question) => {
            return (
              <Question
                key={question.id}
                setActiveQuestion={setActiveQuestionHandler}
                {...question}
              />
            );
          })}
        </AnimateSharedLayout>
      </div>
    </Faq>
  );
};

const Question = ({ active, title, id, answer, setActiveQuestion }) => {
  return (
    <motion.div
      layout
      onClick={() => setActiveQuestion(id)}
      className="question"
    >
      <motion.h4 layout>{title}</motion.h4>
      {active && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
      <div className="faq-line"></div>
    </motion.div>
  );
};
