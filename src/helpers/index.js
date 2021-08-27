// @todo: add some helpers

export function calculateValues(operator, numbers) {
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
