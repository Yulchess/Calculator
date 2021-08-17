import React from 'react'
import {HeaderStyle} from './components'
import {HeaderLink} from './components'
import {HeaderNav} from './components'
import {HeaderText} from './components'

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderText>Calculator App</HeaderText>
      <HeaderNav>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>Setting</HeaderLink>
      </HeaderNav>
    </HeaderStyle>
  )
}

export default Header
