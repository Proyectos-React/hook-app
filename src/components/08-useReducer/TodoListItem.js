import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <tr>
            <th scope="row" >{index + 1}</th>
            <td className={`${todo.done && 'btn-danger'}`}
                onClick={() => handleToggle(todo.id)}
            >{todo.desc}</td>
            <td>
                <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
                    borrar
                </button>
            </td>
        </tr>
    )
}
