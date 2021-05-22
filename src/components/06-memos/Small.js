// import React, { memo } from 'react'
import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Me volví a llamar :(')
    // http? 
    return (
        <small>
            { value }
        </small>
    )
});
