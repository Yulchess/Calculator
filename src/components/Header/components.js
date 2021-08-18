import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const HeaderStyle = styled.div`
  background-color: #434343;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 32px;
  border: 1px solid #707070;
`
export const HeaderLink = styled.li`
  list-style-type: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
  margin-left: 32px;
  font-size: 24px;
  font-width: 100;
  color: #707070;
`
export const HeaderNav = styled.ul`
  display: flex;
`
export const HeaderText = styled.p`
  font-size: 24px;
`
export const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
`
