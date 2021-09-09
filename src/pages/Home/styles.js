import styled from 'styled-components'

import theme from '@/theme'

const MAIN_CONTAINER_WIDTH = 100
const MAIN_CONTAINER_HEIGTH = 560

export const Container = styled.div`
  width: ${MAIN_CONTAINER_WIDTH}%;
  height: ${MAIN_CONTAINER_HEIGTH}px;
  background-color: ${theme.colors.white};
  display: flex;
  padding: ${theme.spaces[3]}px ${theme.spaces[6]}px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces[5]}px;
`
