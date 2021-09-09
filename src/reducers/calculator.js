import { CALCULATOR_ACTIONS } from '@/constants/actions'
import { calculateValues } from '@/helpers/index'

const initialState = {
  display: '0',
  operator: null,
  prevNumber: 0,
  history: [],
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
    case CALCULATOR_ACTIONS.CALCULATE_RESULT: {
      let calculating = calculateValues(state.operator, [
        Number(action.payload[0]),
        Number(action.payload[1]),
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
    case CALCULATOR_ACTIONS.CLEAR_HISTORY:
      return {
        ...state,
        history: initialState.history,
      }
    case CALCULATOR_ACTIONS.GET_LOCAL_STORE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default calculatorReducer
