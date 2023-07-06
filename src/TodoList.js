import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;