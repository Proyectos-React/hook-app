import React from 'react'

export const ShowIncremente = React.memo(({ increment }) => {

    console.log('Me volví a generar :(')
    return (
        <button 
            className="btn btn-primary"
            onClick= { () => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
});
