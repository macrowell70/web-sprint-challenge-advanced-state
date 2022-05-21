import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer } = props.form
  const inputArray = ["newQuestion", "newTrueAnswer", "newFalseAnswer"]

  

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

  const placeholder = (input) => {
    switch(input) {
      case "newQuestion": {
        return "Enter question"
      }
      case "newTrueAnswer": {
        return "Enter true answer"
      }
      case "newFalseAnswer": {
        return "Enter false answer"
      }
      default: {
        return null
      }
    }
  }

  const value = (input) => {
    switch(input) {
      case "newQuestion": {
        return newQuestion
      }
      case "newTrueAnswer": {
        return newTrueAnswer
      }
      case "newFalseAnswer": {
        return newFalseAnswer
      }
      default: {
        return null
      }
    }
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      {inputArray.map((input, idx) => (
        <input 
          key={idx} 
          maxLength={50} 
          onChange={onChange} 
          id={input} 
          placeholder={placeholder(input)}
          name={input} 
          value={value(input)} />
      ))}
      <button id="submitNewQuizBtn" disabled={disabled()} >Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
