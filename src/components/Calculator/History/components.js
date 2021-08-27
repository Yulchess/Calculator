import theme from '@/theme'
import styled from 'styled-components'

export const RigthTab = styled.div`
  padding: 20px;
  border-left: 2px solid ${theme.colors.gray};
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
    border: 5px solid transparent;
    border-radius: 10px;
    background-clip: content-box;
  }
`
export const Title = styled.p`
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 10px;
`
export const HistoryValues = styled.div`
  font-size: 19px;
`
