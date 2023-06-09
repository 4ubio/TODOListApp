import React from 'react'
import { TodoList, TodoForm } from './'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();
 
    return (
        <>
            <h1 className='title'>TO-DO List App ✅</h1>
            <h1 className='sub'>By Sebastián Rubio 🧑🏽‍💻</h1>

            <br />

            <div className='grid-2'>
                <h2>Total: {todosCount(todos)}</h2>
                <h2>Pendientes: {pendingTodosCount(todos)}</h2>
            </div>

            <hr />

            <div className='container'>
                <h2>Agregar Tarea</h2>    
                <TodoForm onNewTodo={handleNewTodo} />
            </div>

            <br />
            <hr />

            <div className='container'>
                <h2>Tareas guardadas</h2>
                <div>
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
            </div>
        </>
    )
}
