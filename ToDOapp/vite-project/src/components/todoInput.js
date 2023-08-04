import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setTodoText(event.target.value);
    };

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo({
                id: Date.now(),
                text: todoText,
                completed: false,
            }));
            setTodoText('');
        }
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter new todo..."
                value={todoText}
                onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={handleAddTodo}>
                Add Todo
            </button>
        </div>
    );
};

export default TodoInput;
