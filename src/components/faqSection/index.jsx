import React, { useState } from "react";
import { Faq } from "./styles/faqSection";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";
//animation
import { scrollReveal } from "../../animation";
export default () => {
  const [questionList, setQuestionList] = useState([
    {
      active: false,
      id: 1,
      title: "How long have I been web development?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quam?",
    },
    {
      active: false,
      id: 2,
      title: "Where did I study, where did I work, tell us about yourself?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quam?",
    },
    {
      active: false,
      id: 3,
      title: "What are you striving for?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quam?",
    },
    {
      active: false,
      id: 4,
      title: "The dream Team?",
      answer:
        " Lorem ipsum dolor sitamet consectetur adipisicing elit. Quis, quam?",
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
