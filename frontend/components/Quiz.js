import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
import * as actions from '../state/action-creators'

function Quiz(props) {
  const { quiz } = props
  const answers = (quiz ? quiz.answers : null)

  useEffect(() => {
    props.fetchQuiz()
  }, [])

  console.log(quiz)

  const clickSelected = (answer) => {
    props.postAnswer({
      "quiz_id": quiz.quiz_id,
      "answer_id": answer.answer_id
    })
  }

  
  // console.log(answers[0].text, answers[1].text)

  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div  id="quizAnswers">
              {answers.map(answer => (
                  <div className="answer" key={answer.answer_id}>
                    {answer.text}
                  <button onClick={() => clickSelected(answer)}>Select</button>
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
  })
}

export default connect(mapState, actions)(Quiz)