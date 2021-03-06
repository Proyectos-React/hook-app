import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 12345,
                    name: "Merling Josue",
                    email: "merling.ramirez@upeu.edu.pe"
                })}
            >
                Login
            </button>
        </div>
    )
}
