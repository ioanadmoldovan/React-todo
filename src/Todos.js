import React from 'react';


const Todos = ({ todos, deleteTodos }) => { 
    
    const todoList = todos.length ? (
        todos.map( todo => {
            return(
                <div className="center collection-item" key={ todo.id }>
                    <span onClick={ () => {deleteTodos(todo.id)} }>{todo.task}</span>
                </div>
            )
        })
        ) : (
            <p className="center"> Congrats! You've accomplished everything you were suppose to do today :) </p>
            )
    return(
        <div className="todos collection">
            { todoList }
        </div>
    )
}
export default Todos;
