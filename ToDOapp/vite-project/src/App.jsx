import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
