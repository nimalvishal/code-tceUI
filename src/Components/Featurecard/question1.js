import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './question1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Question1 = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question1-container">
      <span className="question1-text heading3">{props.question}</span>
      <div className={`answer-container ${showAnswer ? 'show' : ''}`}>
        <span className="bodySmal">{props.answer}</span>
      </div>
      <button onClick={() => setShowAnswer(!showAnswer)} className='butqua'>
        <FontAwesomeIcon icon={showAnswer ? faAngleUp : faAngleDown} />
      </button>
    </div>
  );
};

Question1.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
};

Question1.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
};

export default Question1;
