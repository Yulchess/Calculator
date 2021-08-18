import React, { useState } from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'

import { Card, Heading } from './components'
import Header from '@/components/Header'
import Display from '@/components/Calculator/Display'
import Keypad from '@/components/Calculator/Keypad'
import Calculator from '@/components/Calculator'

export const MyContext = React.createContext();

export default () => {
  const [value,setValue] = useState(0)
  return (
      <Calculator />
  )
}
