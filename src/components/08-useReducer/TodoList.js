import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo, i) => (
                        <TodoListItem 
                            key = { todo.id }
                            todo = { todo }
                            index = { i }
                            handleDelete = { handleDelete }
                            handleToggle = { handleToggle }
                        />
                    ))
                }
            </tbody>
        </table>
    )
}
