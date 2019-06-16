import React from 'react';


const Todos = ({ todos }) => { 
    
    const todoList = todos.map( todo => {
        return(
            <div className='todos' key={ todo.id }>
                <div> Task: { todo.task } </div>
                <div> Priority: { todo.priority } </div>
            </div>
        )
    })
    return(
        <div className='todo-list'>
            { todoList }
        </div>
    )
}
export default Todos;
