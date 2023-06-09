import React from 'react'

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <li className='list-group-item'>
            <span 
                className={`text-item ${(todo.done) ? 'done' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
            >{todo.description}</span>
            <button 
                className='btn btn-danger' 
                onClick={() => onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}