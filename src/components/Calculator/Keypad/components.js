import theme from '@/theme'
import styled from 'styled-components'

export const MyTable = styled.table`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 0 35px;
`
export const MyTr = styled.tr`
  display: flex;
  justify-content: space-between;
`

export const MyButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${props =>
    props.theme.backgroundColor.primary};
  font-size: 36px;
  font-weight: 500;
  cursor: pointer;
`
