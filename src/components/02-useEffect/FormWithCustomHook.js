import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className="container mt-5">
            <form onSubmit={ handleSubmit }>
                <h1>FormWithCustomHook</h1>
                <hr />
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Tu email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="**********"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="btn btn-primary mt-5">
                    Guardar
                </button>
            </form>

        </div>
    )
}
