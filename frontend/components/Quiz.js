import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
import * as actions from '../state/action-creators'

function Quiz(props) {
  const { quiz, infoMessage } = props
  const answers = (quiz ? quiz.answers : null)

  useEffect(() => {
    props.fetchQuiz()
  }, [])

  
  // console.log(answers[0].text, answers[1].text)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div  id="quizAnswers">
              {answers.map(answer => (
                  <div className="answer" key={answer.answer_id}>
                    {answer.text}
                  <button onClick={() => props.postAnswer({
                    "quiz_id": quiz.quiz_id, 
                    "answer_id": answer.answer_id
                    })}>Select</button>
                  </div>
              ))}
            </div>
              {/* <div className="answer selected" */}

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapState = (state) => {
  return({
    quiz: state.quiz,
    infoMessage: state.infoMessage
  })
}

export default connect(mapState, actions)(Quiz)