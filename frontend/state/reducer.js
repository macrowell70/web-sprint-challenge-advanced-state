// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case types.MOVE_CLOCKWISE: {
      return state < 5 ? state = state + 1 : state = 0
    }
    case types.MOVE_COUNTERCLOCKWISE: {
      return state > 0 ? state = state - 1 : state = 5 
    }
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE: {
      return state = action.payload
    }
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER: {
      return state = action.payload
    }
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
