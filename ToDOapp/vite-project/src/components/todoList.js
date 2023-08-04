import React from 'react';
import { useSelector } from 'react-redux';
import todoItem from './todoItem';

const todoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <ul className="list-group mt-4">
            {todos.map((todo) => (
                <todoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default todoList;
