// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios';

import * as types from './action-types';

const url = 'http://localhost:9000/api/quiz/'

export function moveClockwise() { 
  return {
    type: types.MOVE_CLOCKWISE
  }
}

export function moveCounterClockwise() { 
  return {
    type: types.MOVE_COUNTERCLOCKWISE
  }
}

export function selectAnswer(answer) { 
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: answer
  }
}

export function setMessage(message) { 
  return {
    type: types.SET_INFO_MESSAGE,
    payload: message
  }
}

export function setQuiz(quiz) { 
  return {
    type: types.SET_QUIZ_INTO_STATE,
    payload: quiz
  }
}

export function inputChange({ name, value }) { 
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value }
  }
}

export function resetForm() {
  return {
    type: types.RESET_FORM
  }
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null))
    axios.get(url + 'next')
    .then(res => {
      const quiz = res.data
      dispatch(setQuiz(quiz))
    })
    .catch (err => {
      console.log(err)
    })
  }
}
export function postAnswer(answer) {
  return function (dispatch) {
    axios.post(url + 'answer', answer)
    .then(res => {
      const answerMessage = res.data.message
      dispatch(selectAnswer(answer))
      dispatch(setMessage(answerMessage))
      dispatch(fetchQuiz())
    })
    .catch(err => {
      console.log(err)
    })
  }
}
export function postQuiz(quiz) {
  return function (dispatch) {
    axios.post(url + 'new', quiz)
    .then (res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
