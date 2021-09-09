import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  calculateResultAction,
  changeSignAction,
  clearDisplayAction,
  clearLastNummerAction,
  deletePrevAction,
  operatorAction,
  updateDisplayAction,
  updatePrevAction,
} from '@/actions/index'
import {
  ButtonKeypad,
  KeypadColumn,
  KeypadRow,
  KeypadWrapper,
} from '@/components/Calculator/Keypad/styles'

const Keypad = () => {
  const dispatch = useDispatch()
  const [updated, setUpdated] = useState(false)
  const isOperator = useSelector(
    state => state.calculator.operator,
  )
  const prevNumber = useSelector(
    state => state.calculator.prevNumber,
  )
  const display = useSelector(
    state => state.calculator.display,
  )
  const updateDisplayHandler = event => {
    setUpdated(true)
    if (
      (isOperator && !prevNumber) ||
      typeof display === 'number'
    ) {
      dispatch(updatePrevAction(display))
      clearDisplayHandler()
    }
    typeof display === 'number' && clearDisplayHandler()
    dispatch(updateDisplayAction(event.target.value))
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplayAction())
  }

  const clearLastNummerHandler = () => {
    dispatch(clearLastNummerAction())
  }

  const displayOperatorHandler = event => {
    dispatch(operatorAction(event.target.value))
  }

  const calculateHandler = () => {
    if (isOperator && display) {
      if (updated)
        dispatch(
          calculateResultAction([prevNumber, display]),
        )
      else
        dispatch(
          calculateResultAction([display, prevNumber]),
        )

      if (typeof display !== 'number')
        dispatch(updatePrevAction(display))
      setUpdated(false)
    }
  }

  const deletePrevValueHandler = () => {
    dispatch(deletePrevAction())
  }

  const updateDotHandler = event => {
    if (!String(display).includes('.')) {
      dispatch(updateDisplayAction(event.target.value))
    }
  }

  const сhangeSignHandler = () => {
    dispatch(changeSignAction())
  }

  const keys = [
    [
      { value: 'C', method: deletePrevValueHandler },
      { value: '7', method: updateDisplayHandler },
      { value: '8', method: updateDisplayHandler },
      { value: '9', method: updateDisplayHandler },
      { value: '*', method: displayOperatorHandler },
    ],
    [
      { value: '-', method: displayOperatorHandler },
      { value: '4', method: updateDisplayHandler },
      { value: '5', method: updateDisplayHandler },
      { value: '6', method: updateDisplayHandler },
      { value: '/', method: displayOperatorHandler },
    ],
    [
      { value: '+', method: displayOperatorHandler },
      { value: '1', method: updateDisplayHandler },
      { value: '2', method: updateDisplayHandler },
      { value: '3', method: updateDisplayHandler },
      { value: '=', method: calculateHandler },
    ],
    [
      { value: '.', method: updateDotHandler },
      { value: '%', method: displayOperatorHandler },
      { value: '0', method: updateDisplayHandler },
      { value: '+-', method: сhangeSignHandler },
      { value: 'CE', method: clearLastNummerHandler },
    ],
  ]

  return (
    <KeypadWrapper>
      {keys.map((rows, index) => (
        <KeypadRow key={index}>
          {rows.map(column => (
            <KeypadColumn key={column.value}>
              <ButtonKeypad
                value={column.value}
                onClick={event => column.method(event)}>
                {column.value}
              </ButtonKeypad>
            </KeypadColumn>
          ))}
        </KeypadRow>
      ))}
    </KeypadWrapper>
  )
}

export default Keypad
