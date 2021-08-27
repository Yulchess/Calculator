import { CALCULATOR_ACTIONS } from '@/constants/actions'

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

export function clearHistory() {
  return { type: CALCULATOR_ACTIONS.CLEAR_HISTORY }
}

export function getLocalStorage(value) {
  return {
    type: CALCULATOR_ACTIONS.GET_LOCAL_STORE,
    payload: value,
  }
}
