import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice, { increment, decrement, incrementByAmount, testing } from './counterSlice'
// import {counterSlice} from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter1.value)
  const obj = useSelector((state) => state.counter1.obj);
  const dispatch = useDispatch();

  console.log("Count" + count);
  console.log(obj);

  const self1 = {
        FirstName:'Pragati',
        LastName:'Khurana'
    }

  const self2 = {
        FirstName:'Riddhim',
        LastName:'Khurana'
    }

const self = [self1, self2];
  function test1() {

    console.log(count);
    dispatch(testing(self))
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        
        <button
          aria-label="Increment value by 10"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By 10
        </button>

        <br /><br />
        <button onClick={()=>test1()}>Test</button>
      </div>
    </div>
  )
}