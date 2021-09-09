import styled from 'styled-components'

import theme from '@/theme'

const DISPLAY_WIDTH = 850
const DISPLAY_HEIGTH = 70

export const InputInfo = styled.div`
  border-bottom: 1px solid ${theme.colors.gray};
  width: ${DISPLAY_WIDTH}px;
  height: ${DISPLAY_HEIGTH}px;
  font-size: ${theme.spaces[12]}px;
  border: none;
  text-align: right;
  border-bottom: ${theme.spaces[1]}px solid
    ${theme.colors.gray};
  margin-top: ${theme.spaces[4]}px;
`

export const TextSpan = styled.span`
  padding: 0 ${theme.spaces[11]}px;
  margin-bottom: ${theme.spaces[7]}px;
`
