export const CALCULATOR_ACTIONS = {
  ADD_NUMBERS: 'ADD_NUMBERS',
}

export function addNumbers(value) {
  return {
    type: CALCULATOR_ACTIONS.ADD_NUMBERS,
    payload: value,
  }
}
