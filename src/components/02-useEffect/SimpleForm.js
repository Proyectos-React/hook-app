import React, { useEffect, useState } from 'react';
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!!')
    }, []);
    
    useEffect( () => {
        // console.log('fomrstate cambio')
    }, [formState]);
   
    useEffect( () => {
        // console.log('email cambió')
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <div className="container mt-5">
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu nombre" 
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                    />
            </div>
            
            <div className="form-group mt-3">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Tu email" 
                    autoComplete="off"
                    value={email }
                    onChange={ handleInputChange }
                    />
            </div>

            { (name === '123') && <Message/>}

        </div>
    )
}
