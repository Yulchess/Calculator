import { MyContext } from '@/pages/Home'
import React, { useContext } from 'react'
import { useState } from 'react'
import { MyTable, MyButton, MyTr } from './components'
import { connect } from 'react-redux'
import { addNumbers } from '@/actions/index'

const Keypad = ({ addNumbers }) => {
  const addNumbersHandler = e => {
    addNumbers(e.target.value)
  }

  return (
    <MyTable>
      <MyTr>
        <td>
          <MyButton onClick={addNumbersHandler}>C</MyButton>
        </td>
        <td>
          <MyButton value={7} onClick={addNumbersHandler}>
            7
          </MyButton>
        </td>
        <td>
          <MyButton value={8} onClick={addNumbersHandler}>
            8
          </MyButton>
        </td>
        <td>
          <MyButton value={9} onClick={addNumbersHandler}>
            9
          </MyButton>
        </td>
        <td>
          <MyButton>*</MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton>-</MyButton>
        </td>
        <td>
          <MyButton value={4} onClick={addNumbersHandler}>
            4
          </MyButton>
        </td>
        <td>
          <MyButton value={5} onClick={addNumbersHandler}>
            5
          </MyButton>
        </td>
        <td>
          <MyButton value={6} onClick={addNumbersHandler}>
            6
          </MyButton>
        </td>
        <td>
          <MyButton>/</MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton>+</MyButton>
        </td>
        <td>
          <MyButton value={1} onClick={addNumbersHandler}>
            1
          </MyButton>
        </td>
        <td>
          <MyButton value={2} onClick={addNumbersHandler}>
            2
          </MyButton>
        </td>
        <td>
          <MyButton value={3} onClick={addNumbersHandler}>
            3
          </MyButton>
        </td>
        <td>
          <MyButton>=</MyButton>
        </td>
      </MyTr>
      <MyTr>
        <td>
          <MyButton>.</MyButton>
        </td>
        <td>
          <MyButton>(</MyButton>
        </td>
        <td>
          <MyButton value={0} onClick={addNumbersHandler}>
            0
          </MyButton>
        </td>
        <td>
          <MyButton>)</MyButton>
        </td>
        <td>
          <MyButton>CE</MyButton>
        </td>
      </MyTr>
    </MyTable>
  )
}

const mapDispatchToProps = {
  addNumbers,
}

export default connect(
  null,
  mapDispatchToProps,
)(Keypad)
