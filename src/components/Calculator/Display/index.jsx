import { MyContext } from '@/pages/Home'
import React, { useContext } from 'react'
import Keypad from '../Keypad'
import { InputInfo, TextSpan } from './components'
import { connect } from 'react-redux'

const Display = ({ displayValue,resultValue }) => {
  return (
    <InputInfo>
      <TextSpan>{displayValue }</TextSpan>
    </InputInfo>
  )
}

const mapStateToProps = state => {
  return {
    displayValue: state.calculator.display,
    resultValue:state.calculator.result
  }
}

export default connect(mapStateToProps)(Display)
