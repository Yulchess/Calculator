import React from 'react'
import {MyTable,MyButton,MyTr} from './components'

const Keypad= ()=>{
    return(
        <MyTable >
        <MyTr >
            <td><MyButton >C</MyButton></td>
            <td><MyButton >7</MyButton></td>
            <td><MyButton >8</MyButton></td>
            <td><MyButton >9</MyButton></td>
            <td><MyButton >*</MyButton></td>
        </MyTr>
        <MyTr >
            <td><MyButton >-</MyButton></td>
            <td><MyButton >4</MyButton></td>
            <td><MyButton >5</MyButton></td>
            <td><MyButton >6</MyButton></td>
            <td><MyButton >/</MyButton></td>
        </MyTr>
        <MyTr>
            <td><MyButton >+</MyButton></td>
            <td><MyButton >1</MyButton></td>
            <td><MyButton >2</MyButton></td>
            <td><MyButton >3</MyButton></td>
            <td><MyButton >=</MyButton></td>
        </MyTr>
        <MyTr >
            <td><MyButton >.</MyButton></td>
            <td><MyButton >(</MyButton></td>
            <td><MyButton >0</MyButton></td>
            <td><MyButton >)</MyButton></td>
            <td><MyButton>CE</MyButton></td>
        </MyTr>
    </MyTable>
    )
}

export default Keypad