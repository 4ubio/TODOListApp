import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer'

export const useTodo = (initialState = []) => {
    
    const init = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            return JSON.parse(localStorage.getItem('todos'))
        }
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)); //Guardar en Local storage los TODOS
    }, [todos])

    const todosCount = (todos) => {
        return todos.length;
    }

    const pendingTodosCount = (todos) => {
        return todos.filter(todo => !todo.done).length;
    }

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }
        
        dispatch(action) //Ejecutar la acción
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        dispatch(action) //Ejecutar la acción
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }

        dispatch(action) //Ejecutar la acción
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
