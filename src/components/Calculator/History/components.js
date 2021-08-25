import styled from 'styled-components'

export const RigthTab = styled.div`
  padding: 20px;
  border-left: 1px solid #707070;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  scrollbar-color: #434343;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #434343;
    border: 5px solid transparent;
    border-radius: 10px;
    background-clip: content-box;
  }
`
export const Title = styled.p`
  margin: 0 auto;
  font-size: 23px;
  margin-bottom: 10px;
`
export const HistoryValues = styled.div`
  font-size: 19px;
`
