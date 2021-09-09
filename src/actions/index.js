import { CALCULATOR_ACTIONS } from '@/constants/actions'

export const updateDisplayAction = payload => ({
  payload,
  type: CALCULATOR_ACTIONS.UPDATE_DISPLAY,
})

export const clearDisplayAction = () => ({
  type: CALCULATOR_ACTIONS.CLEAR_DISPLAY,
})

export const clearLastNummerAction = () => ({
  type: CALCULATOR_ACTIONS.CLEAR_LAST_NUMBER,
})
export const operatorAction = payload => ({
  payload,
  type: CALCULATOR_ACTIONS.OPERATOR,
})

export const calculateResultAction = payload => ({
  payload,
  type: CALCULATOR_ACTIONS.CALCULATE_RESULT,
})

export const updatePrevAction = payload => ({
  payload,
  type: CALCULATOR_ACTIONS.UPDATE_PREV,
})

export const deletePrevAction = () => ({
  type: CALCULATOR_ACTIONS.DELETE_PREV,
})
export const changeSignAction = () => ({
  type: CALCULATOR_ACTIONS.CHANGE_SIGN,
})

export const clearHistoryAction = () => ({
  type: CALCULATOR_ACTIONS.CLEAR_HISTORY,
})

export const getLocalStorageAction = payload => ({
  payload,
  type: CALCULATOR_ACTIONS.GET_LOCAL_STORE,
})
