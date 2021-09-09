import React from 'react'
import { useSelector } from 'react-redux'

import {
  InputInfo,
  TextSpan,
} from '@/components/Calculator/Display/styles'

const Display = () => {
  const display = useSelector(
    state => state.calculator.display,
  )

  return (
    <InputInfo>
      <TextSpan>{display}</TextSpan>
    </InputInfo>
  )
}

export default Display
