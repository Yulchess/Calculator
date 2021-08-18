import React from 'react'
import { MainBackg, LeftSide } from './components'
import Display from './Display'
import Keypad from './Keypad'
import History from './History'

const Calculator = () => {
  return (
    <MainBackg>
      <LeftSide>
        <Display />
        <Keypad />
      </LeftSide>
      <History />
    </MainBackg>
  )
}
export default Calculator
