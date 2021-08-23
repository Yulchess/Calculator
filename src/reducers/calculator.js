import { CALCULATOR_ACTIONS, operator } from '@/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  display: '0',
  operator: null,
  secondValue: 0,
  result: 0,
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
          state.display === '0' ||
          state.operator !== initialState.operator
            ? action.payload
            : state.display + action.payload,

        secondValue:
          state.operator && !state.secondValue
            ? state.display
            : state.secondValue,

        // display: calculateValues(state.operator, [
        //   +state.secondValue,
        //   +state.display,
        // ]),
      }
    case CALCULATOR_ACTIONS.CLEAR_DISPLAY:
      return {
        ...state,
        display: initialState.display,
        secondValue: initialState.secondValue,
        operator: initialState.operator,
        result: initialState.result,
      }
    case CALCULATOR_ACTIONS.CLEAR_LAST_NUMBER:
      return {
        ...state,
        display: state.display.slice(0, -1),
      }
    case CALCULATOR_ACTIONS.OPERATOR:
      return {
        ...state,
        operator: action.payload,
        result:
          state.secondValue && state.display
            ? calculateValues(state.operator, [
                +state.secondValue,
                +state.display,
              ])
            : state.display,
      }
    case CALCULATOR_ACTIONS.CALCULATE_RESULT:
      return {
        ...state,
        display: calculateValues(state.operator, [
          +state.secondValue,
          +state.display,
        ]),

        operator: initialState.operator,
        secondValue: initialState.secondValue,
        history: [
          ...state.history,
          `${state.secondValue} ${state.operator} ${
            state.display
          } = ${calculateValues(state.operator, [
            +state.secondValue,
            +state.display,
          ])}`,
        ],
      }

    default:
      return state
  }
}

export default calculatorReducer
