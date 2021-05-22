import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado'

export const MemoHook = () => {

    const { counter, increment } =  useCounter(5);
    const [show, setShow] = useState(true);
    const memoProcesoPesado =  useMemo(() => procesoPesado(counter), [ counter ]);
    
    return (
        <div className="container mt-5">
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-primary ml-2"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show/Hidde { JSON.stringify( show ) }
            </button>
        </div>
    )
}
