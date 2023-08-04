import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggleTodo = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <li className="list-group-item d-flex align-items-center">
            <input
                type="checkbox"
                className="form-check-input me-3"
                checked={todo.completed}
                onChange={handleToggleTodo}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
            <button className="btn btn-danger ms-auto" onClick={handleDeleteTodo}>
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
