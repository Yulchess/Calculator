import { Link } from 'react-router-dom'
import styled from 'styled-components'

import theme from '@/theme'

export const HeaderStyle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.textColor.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${theme.spaces[16]}px;
  padding: ${theme.spaces[7]}px;
`
export const HeaderLink = styled.li`
  list-style-type: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.textColor.primary};
  }
  margin-left: ${theme.fontSizes[5]}px;
  font-size: ${theme.spaces[8]}px;
  font-width: ${theme.fontSizes[12]};

  color: ${props => props.theme.navColor.primary};
`
export const HeaderNav = styled.ul`
  display: flex;
`
export const HeaderText = styled.p`
  font-size: ${theme.spaces[17]}px;
`
export const MyLink = styled(Link)`
  color: ${props => props.theme.navColor.primary};
  text-decoration: none;
  font-size: ${theme.spaces[17]}px;
`
