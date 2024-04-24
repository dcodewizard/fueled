import React, { useState } from 'react';
import styles from './AddQuestion.module.scss';
import QuestionsList from './Questions';

const AddQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('short');
  const [answer, setAnswer] = useState('');
  const [questionsList, setQuestionsList] = useState([]);
  const [questions, setQuestions] = useState([]); // Your questions state

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerTypeChange = (e) => {
    setAnswerType(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      answerType,
      answer
    };

    setQuestionsList([...questionsList, newQuestion]);
    setQuestion('');
    setAnswer('');
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestionsList = [...questionsList];
    updatedQuestionsList.splice(index, 1);
    setQuestionsList(updatedQuestionsList);
  };


  const handleSaveAndShare = () => {
    const questionnaireData = {
      questions: questionsList
    };

    console.log(JSON.stringify(questionnaireData, null, 2));
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.formGroup}>
              <label htmlFor="question" className={styles.label}>Question</label>
              <input
                type="text"
                id="question"
                className={styles.input}
                placeholder="What do you want to ask?"
                value={question}
                onChange={handleQuestionChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="answerType" className={styles.label}>Answer Type</label>
              <select
                id="answerType"
                className={styles.select}
                value={answerType}
                onChange={handleAnswerTypeChange}
              >
                <option value="short">Short Answer</option>
                <option value="paragraph">Paragraph</option>
                <option value="checkbox">Checkboxes</option>
                <option value="multipleChoice">Multiple Choice</option>
              </select>
            </div>
            {answerType === 'short' && (
              <div className={styles.formGroup}>
                <label htmlFor="answer" className={styles.label}>Answer</label>
                <input
                  type="text"
                  id="answer"
                  className={`${styles.input} ${styles.shortAnswer}`}
                  placeholder="Short snswer text"
                  value={answer}
                  onChange={handleAnswerChange}
                />
              </div>
            )}
            {/* Add other conditional rendering for different answer types */}
          </div>
        </div>
      </div>
      <div className={styles.addButtonContainer}>
        <button className={styles.addButton} onClick={handleAddQuestion} aria-label="Add Question">+ ADD QUESTION</button>
      </div>
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton} onClick={handleSaveAndShare} aria-label="Save and Share">SAVE & SHARE</button>
      </div>
      <QuestionsList questions={questionsList} onDeleteQuestion={handleDeleteQuestion} />
    </>
  );
};

export default AddQuestionForm;
