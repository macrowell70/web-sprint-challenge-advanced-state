import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer} = props.form

  const onChange = evt => {
    const { name, value } = evt.target
    props.inputChange({ name, value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz({
      question_text: newQuestion.trim(), 
      true_answer_text: newTrueAnswer.trim(), 
      false_answer_text: newFalseAnswer.trim()
    })
  }

  const disabled = () => {
    return (
      newQuestion.trim() && newTrueAnswer.trim() && newFalseAnswer.trim() ? false : true
      )
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" name="newQuestion" value={newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" name="newTrueAnswer" value={newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" name="newFalseAnswer" value={newFalseAnswer} />
      <button id="submitNewQuizBtn" disabled={disabled()} >Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
