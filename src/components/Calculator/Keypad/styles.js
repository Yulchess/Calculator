import styled from 'styled-components'

import theme from '@/theme'

const KEYPAD_BUTTON_WIDTH = 80
const KEYPAD_BUTTON_HEIGTH = 80

export const KeypadWrapper = styled.table`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 0 ${theme.spaces[11]}px;
`
export const KeypadRow = styled.tr`
  display: flex;
  justify-content: space-between;
`

export const ButtonKeypad = styled.button`
  width: ${KEYPAD_BUTTON_WIDTH}px;
  height: ${KEYPAD_BUTTON_HEIGTH}px;
  border-radius: ${theme.spaces[7]}px;
  background-color: ${props =>
    props.theme.backgroundColor.primary};
  font-size: ${theme.spaces[11]}px;
  font-weight: ${theme.fontSizes[10]};
  cursor: pointer;
`
export const KeypadColumn = styled.td``
