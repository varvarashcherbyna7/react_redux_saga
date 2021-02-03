import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
    }
}

function TodoList (props) {

        return (
            <div className="todoListContainer">
                <h1>React tutorial</h1>
                <ul style={styles.ul}>
                    {
                        props.todos.map( (todo, index) => {
                            return(
                                <TodoItem key={todo.id}
                                          todo={todo}
                                          index={index}
                                          onChange={props.onToggle}
                                />
                            )
                        })
                    }

                </ul>
            </div>
        )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired

}

export default TodoList;
