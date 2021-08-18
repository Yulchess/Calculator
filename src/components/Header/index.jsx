import React from 'react'
import {
  HeaderStyle,
  HeaderLink,
  HeaderNav,
  HeaderText,
  MyLink,
} from './components'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderText>Calculator App</HeaderText>
      <HeaderNav>
        <HeaderLink>
          <MyLink to={HOME_PAGE_ROUTE}>Home</MyLink>
        </HeaderLink>
        <HeaderLink>
          <MyLink to={SETTINGS_PAGE_ROUTE}>Settings</MyLink>
        </HeaderLink>
      </HeaderNav>
    </HeaderStyle>
  )
}

export default Header
