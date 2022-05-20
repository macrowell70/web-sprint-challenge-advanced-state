import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
import * as actions from '../state/action-creators'

function Quiz(props) {
  const { quiz, selectedAnswer } = props
  const answers = (quiz ? quiz.answers : null)

  useEffect(() => {
    props.fetchQuiz()
  }, [])

  const clickSelected = (answer) => {
    props.selectAnswer(answer)
  }

  const clickSubmit = (answer) => {
    props.postAnswer({
      "quiz_id": quiz.quiz_id,
      "answer_id": answer.answer_id
    })
  }

  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div  id="quizAnswers">
              {answers.map(answer => (
                  <div className={selectedAnswer && selectedAnswer.answer_id === answer.answer_id ? "answer selected" : "answer"} onClick={() => clickSelected(answer)} key={answer.answer_id}>
                    {answer.text}
                  <button>{selectedAnswer && selectedAnswer.answer_id === answer.answer_id ? "SELECTED" : "Select"}</button>
                  </div>
              ))}
            </div>

            <button id="submitAnswerBtn" onClick={() => clickSubmit(selectedAnswer)} disabled={selectedAnswer ? false : true}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapState = (state) => {
  return({
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  })
}

export default connect(mapState, actions)(Quiz)