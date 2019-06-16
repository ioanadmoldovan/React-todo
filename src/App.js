import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodo';

class App extends Component{
  state = {
    todos: [
      { task: 'study', priority: 'high', id: 1 },
      { task: 'practice', priority: 'high', id: 2},
      { task: 'cooking', priority: 'low', id: 3 }
    ]
  }

  addTodos = (todo) =>  {
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className='App'>
      <h1>TO DO</h1>
      <h2>Get things done!</h2>
      <Todos todos={ this.state.todos } />
      <AddTodos addTodos={ this.addTodos } />
      </div>
    )
  }
}

export default App;
