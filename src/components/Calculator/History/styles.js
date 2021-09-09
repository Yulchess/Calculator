import styled from 'styled-components'

import theme from '@/theme'

export const HistoryWrapper = styled.div`
  padding: ${theme.spaces[6]}px;
  border-left: ${theme.spaces[1]}px solid
    ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  scrollbar-color: ${theme.colors.darkGray};
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.darkGray};
    border: ${theme.spaces[3]}px solid transparent;
    border-radius: ${theme.spaces[5]}px;
    background-clip: content-box;
  }
`
export const TitleHistory = styled.p`
  margin: 0 auto;
  font-size: ${theme.spaces[7]}px;
  margin-bottom: ${theme.spaces[5]}px;
`
export const HistoryValues = styled.div`
  font-size: ${theme.spaces[15]}px;
`
