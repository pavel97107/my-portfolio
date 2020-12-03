import React from "react";
import {Faq} from './styles/faqSection'



export default () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="questions">
        <div className="question">
          <h4>How long have I been web development?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              quam?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        
        <div className="question">
          <h4>Where did I study, where did I work, tell us about yourself?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              quam?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What are you striving for?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              quam?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>The dream Team?</h4>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
              quam?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
    </Faq>
  );
};
