import React from 'react'
import { connect } from 'react-redux' 
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {
  const { wheelState } = props

  const handleClickClockwise = () => {
    return props.moveClockwise()
  }

  const handleClickCounterClockwise = () => {
    return props.moveCounterClockwise()
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={wheelState === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{wheelState === 0 ? "B" : ""}</div>
        <div className={wheelState === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{wheelState === 1 ? "B" : ""}</div>
        <div className={wheelState === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{wheelState === 2 ? "B" : ""}</div>
        <div className={wheelState === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{wheelState === 3 ? "B" : ""}</div>
        <div className={wheelState === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{wheelState === 4 ? "B" : ""}</div>
        <div className={wheelState === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{wheelState === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleClickCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClickClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return ({
    wheelState: state.wheel
  })
}

export default connect(mapState, { moveClockwise, moveCounterClockwise })(Wheel)
