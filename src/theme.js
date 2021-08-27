import { cre } from 'react'
import { css } from 'styled-components'

const font = 'Helvetica Neue'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const gray = '#707070'
const darkGray = '#434343'
const pink = '#f5a6c3'
const ligth = '#C5DDE8'
const ligthPink = '#f3cbd8'
const ligthBlue = ' #b1ccd7'
const ligthGray = '#e8e8e8'
const smokyWhite = '#f2f2f2'
const neutral = '#acaaaa'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const theme = {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    gray,
    darkGray,
    pink,
    ligth,
    neutral,
    ligthGray,
  },
}

export const darkTheme = {
  ...theme,
  colors: {
    primary: darkGray,
  },
  textColor: {
    primary: ligthGray,
  },
  navColor: {
    primary: 'white',
  },
  backgroundColor: {
    primary: smokyWhite,
  },
}

export const lightTheme = {
  ...theme,
  colors: {
    primary: ligthBlue,
  },
  textColor: {
    primary: 'white',
  },
  navColor: {
    primary: 'white',
  },
  backgroundColor: {
    primary: ligth,
  },
}

export const coloredTheme = {
  ...theme,
  colors: {
    primary: pink,
  },
  textColor: {
    primary: 'white',
  },
  navColor: {
    primary: 'white',
  },
  backgroundColor: {
    primary: ligthPink,
  },
}

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
    gray,
    darkGray,
    pink,
    ligth,
    ligthPink,
    neutral,
    ligthGray,
  },
}
