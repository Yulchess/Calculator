import React from 'react'
import {MainBackg,LeftSide} from './components'
import Display from './Display'
import Keypad from './Keypad'
import History  from './History'

const Calculator = () => {
    return <MainBackg>
        <LeftSide>
            <Display/>
            <Keypad/>
        </LeftSide>
        <History/>
    </MainBackg>
}
export default Calculator

    {/* <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
      <p style = {{borderBottom:"1px solid #707070", width:'850px', height:'50px'}}>!!!</p>
      <table style= {{margin:"0 auto", width:'100%' ,display:'flex', flexDirection:"column", height:'100%', justifyContent:'space-around'}} >
        <tr style={{display:'flex',  justifyContent: 'space-around'}}>
            <td><button style= {{width:'80px', height:'80px', borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>C</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>7</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>8</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>9</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>*</button></td>
        </tr>
        <tr style={{display:'flex', justifyContent: 'space-around', }}>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>-</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>4</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>5</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>6</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>/</button></td>
        </tr>
        <tr style={{display:'flex', justifyContent: 'space-around'}}>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>+</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>1</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>2</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>3</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>=</button></td>
        </tr>
        <tr style={{display:'flex', justifyContent: 'space-around', width: '100%'}}>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>.</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>(</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>0</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px', cursor:'pointer'}}>)</button></td>
            <td><button style= {{width:'80px', height:'80px',borderRadius:'20px', fontSize:'25px'}}>CE</button></td>
        </tr>
    </table>
    </div> */}

    {/* <div style= {{borderLeft: '1px solid  #707070'}}></div>) 
    } */}