import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodo';

class App extends Component{
  state = {
    todos: [
      { task: 'study', id: 1 },
      { task: 'practice', id: 2},
      { task: 'cooking', id: 3 }
    ]
  }

  addTodos = (todo) =>  {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }

  deleteTodos = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className= "center blue-text">TO DO</h1>
        <div className="center">Get things done!</div>
        <Todos deleteTodos={ this.deleteTodos} todos={ this.state.todos } />
        <AddTodos addTodos={ this.addTodos } />
      </div>
    )
  }
}

export default App;
