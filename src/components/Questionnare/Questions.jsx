import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './Question';
import styles from './Questions.module.scss';

const QuestionsList = ({ questions, onDeleteQuestion }) => {

  const handleDelete = (index) => {
    onDeleteQuestion(index);
  };
  return (
    <div className={styles.container}>
      <h3>Questions List</h3>
      <div className={styles.cardsContainer} role="list">
        {questions.map((q, index) => (
          <div key={index} className={styles.questionContainer} role="listitem">
            <QuestionCard question={q.question} answer={q.answer} handleDelete={() => handleDelete(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired
};

export default QuestionsList;
