import React, { Component } from 'react';
import TodoItem from './todoitem';
import PropTypes from 'prop-types'


class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
    <TodoItem  key={todo.id}  todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
    ));
   
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos;
