import React from 'react';
import PropTypes from 'prop-types';
import styles from './Question.module.scss';

const QuestionCard = ({ question, answer, handleDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.questionDiv}>
          <div>
            <div className={styles.label}>Question:</div>
            <div className={styles.question}>{question}</div>
          </div>
          <span className={styles.deleteIcon} onClick={handleDelete}>
            <i className={`fas fa-trash ${styles.icon}`} aria-hidden="true"></i>
          </span>
        </div>
        <div>
          <div className={styles.label}>Answer:</div>
          <div className={styles.answer}>{answer}</div>
        </div>
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuestionCard;
