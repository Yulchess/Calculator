import { CALCULATOR_ACTIONS, operator } from '@/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  display: '0',
  operator: null,
  prevNumber: 0,
  // result: 0,
  history: [],
}

function calculateValues(operator, numbers) {
  switch (operator) {
    case '+':
      return numbers[0] + numbers[1]

    case '-':
      return numbers[0] - numbers[1]

    case '/':
      return numbers[0] / numbers[1]

    case '*':
      return numbers[0] * numbers[1]

    case '%':
      return numbers[0] % numbers[1]
  }
}

const calculatorReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CALCULATOR_ACTIONS.UPDATE_DISPLAY:
      return {
        ...state,
        display:
          state.display === initialState.display
            ? action.payload
            : state.display + action.payload,
      }
    case CALCULATOR_ACTIONS.UPDATE_PREV:
      return {
        ...state,
        prevNumber: action.payload,
      }
    case CALCULATOR_ACTIONS.CLEAR_DISPLAY:
      return {
        ...state,
        display: initialState.display,
      }
    case CALCULATOR_ACTIONS.CLEAR_LAST_NUMBER:
      return {
        ...state,
        display: state.display.toString().slice(0, -1),
      }
    case CALCULATOR_ACTIONS.OPERATOR:
      return {
        ...state,
        operator: action.payload,
      }
    case CALCULATOR_ACTIONS.CALCULATE_RESULT:
      let calculating = calculateValues(state.operator, [
        +action.payload[0],
        +action.payload[1],
      ])
      calculating = Number.isInteger(calculating)
        ? calculating
        : calculating.toFixed(3)
      return {
        ...state,
        display: +calculating,
        history: [
          ...state.history,
          `${action.payload[0]} ${state.operator} ${
            action.payload[1]
          } = ${calculating}`,
        ],
      }

    case CALCULATOR_ACTIONS.DELETE_PREV:
      return {
        ...state,
        prevNumber: initialState.prevNumber,
        operator: initialState.operator,
        display: initialState.display,
      }
    case CALCULATOR_ACTIONS.CHANGE_SIGN:
      return {
        ...state,
        display: (Number(state.display) * -1).toString(),
      }

    default:
      return state
  }
}

export default calculatorReducer
