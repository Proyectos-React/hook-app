import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustonHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <div className="container mt-5"> 
            <h1>Counter with Hook: {state} </h1>
            <hr/>
            <button onClick={ () => increment(2) } className="btn">+ 1</button>
            <button onClick={ reset } className="btn">Reset</button>
            <button onClick={ () => decrement(2) } className="btn">- 1</button>
        </div>
    )
}
