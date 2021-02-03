import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        background: 'rgba(139, 0, 0, 0.6)',
        color: 'darkred',
        border: '1px solid rgba(139, 0, 0, 0.1)',
        borderRadius: '50%',
        padding: '0.15rem 0.35rem',
        cursor: 'pointer',
        outline: 'none'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context);

    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className="todoItem" style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       checked={todo.completed}
                       style={styles.input}
                       onChange={() => onChange(todo.id)}/>
                <strong>{index + 1}.</strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={styles.button}
                    onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired

}

export default TodoItem;
