import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  seterNumber,
} from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  console.log(number);

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
        <button onClick={() => dispatch(reset())}></button>
        <button onClick={() => dispatch(incrementByAmount(Number(number)))}>
          + {number}
        </button>
        <input
          type="number"
          name=""
          id=""
          value={number}
          onChange={(e) => dispatch(seterNumber(e.currentTarget.value))}
        />
      </div>
    </div>
  );
}
