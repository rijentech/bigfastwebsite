import React from 'react';
import './faqreply.scss'

const Faqreply = ({question, answer}) => {
  return (
    <div className="question_answer_container">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default Faqreply;
