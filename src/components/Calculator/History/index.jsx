import React from 'react'
import { connect } from 'react-redux'
import {
  RigthTab,
  Title,
  HistoryValues,
} from './components'

const History = ({ historyValue }) => {
  return (
    <RigthTab>
      <Title>History</Title>
      <HistoryValues>
        {historyValue.map(value => (
          <div key={value}>{value}</div>
        ))}
      </HistoryValues>
    </RigthTab>
  )
}

const mapStateToProps = state => {
  return {
    historyValue: state.calculator.history,
  }
}
export default connect(mapStateToProps)(History)
