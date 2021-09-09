import React from 'react'
import { useSelector } from 'react-redux'

import {
  HistoryValues,
  HistoryWrapper,
  TitleHistory,
} from '@/components/Calculator/History/styles'

const History = ({ historyValue }) => {
  const history = useSelector(
    state => state.calculator.history,
  )
  return (
    <HistoryWrapper>
      <TitleHistory>History</TitleHistory>
      <HistoryValues>
        {history.map(value => (
          <div key={value}>{value}</div>
        ))}
      </HistoryValues>
    </HistoryWrapper>
  )
}

export default History
