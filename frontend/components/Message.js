import React from 'react'
import { connect } from 'react-redux' 
import * as actions from '../state/action-creators'

function Message(props) {
  return <div id="message">{props.infoMessage}</div>
}

const mapState = (state) => {
  return ({
    infoMessage: state.infoMessage
  })
}

export default connect(mapState, actions)(Message)
