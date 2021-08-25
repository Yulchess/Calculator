export const CALCULATOR_ACTIONS = {
  UPDATE_DISPLAY: 'UPDATE_DISPLAY',
  CLEAR_DISPLAY: 'CLEAR_DISPLAY',
  CLEAR_LAST_NUMBER: 'CLEAR_LAST_NUMBER',
  OPERATOR: 'OPERATOR',
  SECOND_VALUE: 'SECOND_VALUE',
  CALCULATE_RESULT: 'CALCULATE_RESULT',
  UPDATE_PREV: 'UPDATE_PREV',
  DELETE_PREV: 'DELETE_PREV',
  CHANGE_SIGN: 'CHANGE_SIGN',
}

export function updateDisplay(value) {
  return {
    type: CALCULATOR_ACTIONS.UPDATE_DISPLAY,
    payload: value,
  }
}

export function clearDisplay() {
  return {
    type: CALCULATOR_ACTIONS.CLEAR_DISPLAY,
  }
}
export function clearLastNummer() {
  return {
    type: CALCULATOR_ACTIONS.CLEAR_LAST_NUMBER,
  }
}
export function operator(value) {
  return {
    type: CALCULATOR_ACTIONS.OPERATOR,
    payload: value,
  }
}

export function calculateResult(value) {
  return {
    type: CALCULATOR_ACTIONS.CALCULATE_RESULT,
    payload: value,
  }
}

export function updatePrev(value) {
  return {
    type: CALCULATOR_ACTIONS.UPDATE_PREV,
    payload: value,
  }
}

export function deletePrev() {
  return {
    type: CALCULATOR_ACTIONS.DELETE_PREV,
  }
}

export function changeSign() {
  return {
    type: CALCULATOR_ACTIONS.CHANGE_SIGN,
  }
}
