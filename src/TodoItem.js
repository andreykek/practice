import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
        {todo.completed && ' done'}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;