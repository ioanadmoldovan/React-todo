import React, { Component } from 'react';
import Todos from './Todos';

class AddTodos extends Component{

    state = {
        task: null,
        priority: null
    }
    
    handleChange = (e) => {
        return(
            this.setState({
                [ e.target.id ]: e.target.value
            })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos( this.state ) 
    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor={ 'task' }> Task: </label>
                <input type="text" id='task' onChange={ this.handleChange } />

                <label htmlFor={ 'priority' }> Priority: </label>
                <input type="text" id='priority' onChange={ this.handleChange } />

                <button> Add TODO </button>
            </form>
        )
    }
}

export default AddTodos;