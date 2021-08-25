import { MyContext } from '@/pages/Home'
import React, { useContext, useState } from 'react'
import { MyTable, MyButton, MyTr } from './components'
import { connect, useDispatch } from 'react-redux'
import {
  clearDisplay,
  updateDisplay,
  clearLastNummer,
  operator,
  calculateResult,
  updatePrev,
  deletePrev,
  changeSign
} from '@/actions/index'
import { number } from 'prop-types'

const Keypad = ({
  updateDisplay,
  clearDisplay,
  clearLastNummer,
  operator,
  calculateResult,
  isOperator,
  updatePrev,
  display,
  prevNumber,
  result,
  deletePrev,
  changeSign
}) => {
  const [updated, setUpdated] = useState(false)

  const updateDisplayHandler = e => {
    setUpdated(true)
    if (
      (isOperator && !prevNumber) ||
      typeof display === 'number'
    ) {
      updatePrev(display)
      clearDisplayHandler()
    }
    typeof display === 'number' && clearDisplayHandler()
    updateDisplay(e.target.value)
  }

  const clearDisplayHandler = () => {
    clearDisplay()
  }

  const clearLastNummerHandler = () => {
    clearLastNummer()
  }

  const displayOperator = (e) => {
    operator(e.target.value)
  }

  const calculateHandler = () => {
    if (isOperator) {
      if (updated) calculateResult([prevNumber, display])
      else calculateResult([display, prevNumber])

      if (typeof display !== 'number') updatePrev(display)
      setUpdated(false)
    }
  }

  const deletePrevValue = () => {
    deletePrev()
  }
  
  const updateDotHandler = (e) => {
    if (!String(display).includes('.')) {
      updateDisplay(e.target.value)
    }
  }

  const сhangeSignHandler = ()=>{
    changeSign()
  }
  

  return (
    <MyTable>
      <MyTr>
        <td>
          <MyButton onClick={deletePrevValue}>C</MyButton>
        </td>
        <td>
          <MyButton
            value={7}
            onClick={updateDisplayHandler}>
            7
          </MyButton>
        </td>
        <td>
          <MyButton
            value={8}
            onClick={updateDisplayHandler}>
            8
          </MyButton>
        </td>
        <td>
          <MyButton
            value={9}
            onClick={updateDisplayHandler}>
            9
          </MyButton>
        </td>
        <td>
          <MyButton value="*" onClick={displayOperator}>
            *
          </MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton value="-" onClick={displayOperator}>
            -
          </MyButton>
        </td>
        <td>
          <MyButton
            value={4}
            onClick={updateDisplayHandler}>
            4
          </MyButton>
        </td>
        <td>
          <MyButton
            value={5}
            onClick={updateDisplayHandler}>
            5
          </MyButton>
        </td>
        <td>
          <MyButton
            value={6}
            onClick={updateDisplayHandler}>
            6
          </MyButton>
        </td>
        <td>
          <MyButton value="/" onClick={displayOperator}>
            /
          </MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton value="+" onClick={displayOperator}>
            +
          </MyButton>
        </td>
        <td>
          <MyButton
            value={1}
            onClick={updateDisplayHandler}>
            1
          </MyButton>
        </td>
        <td>
          <MyButton
            value={2}
            onClick={updateDisplayHandler}>
            2
          </MyButton>
        </td>
        <td>
          <MyButton
            value={3}
            onClick={updateDisplayHandler}>
            3
          </MyButton>
        </td>
        <td>
          <MyButton onClick={calculateHandler}>=</MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton
            value="."
            onClick={updateDotHandler}>
            .
          </MyButton>
        </td>
        <td>
          <MyButton value = '%' onClick= {displayOperator}>%</MyButton>
        </td>
        <td>
          <MyButton
            value={0}
            onClick={updateDisplayHandler}>
            0
          </MyButton>
        </td>
        <td>
          <MyButton  onClick= {сhangeSignHandler}>+-</MyButton>
        </td>
        <td>
          <MyButton onClick={clearLastNummerHandler}>
            CE
          </MyButton>
        </td>
      </MyTr>
    </MyTable>
  )
}

const mapDispatchToProps = {
  updateDisplay,
  clearDisplay,
  clearLastNummer,
  operator,
  calculateResult,
  updatePrev,
  deletePrev,
  changeSign
}

const mapStateToProps = state => {
  return {
    isOperator: state.calculator.operator,
    display: state.calculator.display,
    prevNumber: state.calculator.prevNumber,
    resultNumber: state.calculator.result,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Keypad)
