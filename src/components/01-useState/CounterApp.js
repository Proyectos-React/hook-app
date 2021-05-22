import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 40,
        counter4: 60
    });
    const { counter1, counter2 } = state;
    // console.log(counter);
    return (
        <>

            <div className="container mt-5">
                <h1>Counter1 {counter1}</h1>
                <h1>Counter2 {counter2}</h1>
                {/* <h1>Counter {counter}</h1> */}
                <hr />
                <button  className="btn btn-primary"
                        onClick={ () => {
                            setState({
                                ...state,
                                counter1: counter1 + 1
                            });
                        }}>
                    +1
                </button>
            </div>
        </>
    )
}
