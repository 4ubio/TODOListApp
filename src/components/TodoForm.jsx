import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoForm = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({ description: ''})

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder='Escribe una tarea 📝' 
                    name='description'
                    value={description}
                    onChange={onInputChange}
                />

                <button type='submit' className='btn'>Agregar</button>
            </form>
        </>
    )
}
