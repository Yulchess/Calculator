import React from 'react'
import { connect } from 'react-redux'
import { RigthTab, Title } from './components'


const History = ({historyValue}) => {
  return (
    <RigthTab>
      <Title>History</Title>
      <div>{historyValue.map((value)=><div key={value}>{value}</div>)}</div>
    </RigthTab>
  )
}

const mapStateToProps = state => {
  return {
    historyValue: state.calculator.history,
  }
}
export default connect(mapStateToProps) (History)
