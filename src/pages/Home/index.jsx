import React from 'react'

import Display from '@/components/Calculator/Display/index'
import History from '@/components/Calculator/History/index'
import Keypad from '@/components/Calculator/Keypad/index'

import { Container, ContentWrapper } from './styles'

const HomePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Display />
        <Keypad />
      </ContentWrapper>
      <History />
    </Container>
  )
}
export default HomePage
