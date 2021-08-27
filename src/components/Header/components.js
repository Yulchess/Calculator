import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '@/theme'

export const HeaderStyle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.textColor.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 20px;
  // border: 1px solid ${theme.colors.gray};
`
export const HeaderLink = styled.li`
  list-style-type: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.textColor.primary};
  }
  margin-left: 32px;
  font-size: 24px;
  font-width: 100;

  color: ${props => props.theme.navColor.primary};
`
export const HeaderNav = styled.ul`
  display: flex;
`
export const HeaderText = styled.p`
  font-size: 21px;
`
export const MyLink = styled(Link)`
  color: ${props => props.theme.navColor.primary};
  text-decoration: none;
  font-size: 21px;
`
