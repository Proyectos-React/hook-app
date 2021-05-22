import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncremente } from './ShowIncremente';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment =  useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ??? 
    }, [increment])
    return (
        <div className="container mt-5">
            <h1>useCallbackHook: {counter}</h1>
            <hr />

            <ShowIncremente increment={increment} />
        </div>
    )
}
