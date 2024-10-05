import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incCount } from './counterSlice'
import {deCount} from './counterSlice'
import Page2 from './page2'
function App() {
  const dispatch=useDispatch()
  const countValue=useSelector((state)=>(
    state.counter.count
  ))
  const sqValue=useSelector((state)=>(state.counter.sq))
  
  return (
    <>
    <div>
      <button onClick={()=>
        {
          dispatch(incCount())
        }
      } >Increment</button>

      <button onClick={()=>{
        dispatch(deCount())
      }}>Decrement</button>
    </div>
    <h2>count:{countValue}</h2>
    <h3>Square:{sqValue}</h3>
    <div>
        <Page2/>
    </div>
    </>
  )
}

export default App
