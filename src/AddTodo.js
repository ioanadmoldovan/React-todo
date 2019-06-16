import React, { Component } from 'react';
import Todos from './Todos';

class AddTodos extends Component{

    state = {
        task: ''
    }
    
    handleChange = (e) => {
        return(
            this.setState({
                task: e.target.value
            })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos( this.state );
        this.setState({
            task: ''
        })
    }

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor={ 'task' }> Task: </label>
                <input type="text" id='task' onChange={ this.handleChange } value={ this.state.task } />
            </form>
        )
    }
}

export default AddTodos;