import React from 'react'
import Keypad from '../Keypad'
import { InputInfo, TextSpan } from './components'
import { connect } from 'react-redux'

const Display = ({ displayValue }) => {
  return (
    <InputInfo>
      <TextSpan>{displayValue}</TextSpan>
    </InputInfo>
  )
}

const mapStateToProps = state => {
  return {
    displayValue: state.calculator.display,
  }
}

export default connect(mapStateToProps)(Display)
