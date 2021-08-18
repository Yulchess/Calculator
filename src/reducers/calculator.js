import { CALCULATOR_ACTIONS } from '@/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  display: 0,
}

const calculatorReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CALCULATOR_ACTIONS.ADD_NUMBERS:
      return {
        ...state,
        display: state.display + action.payload,
      }
    default:
      return state
  }
}

export default calculatorReducer
