import React, { useState } from 'react';
import './Todo.css';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>حفظ</button>
        </div>
      ) : (
        <>
          <div className="todo-checkbox">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
          </div>
          <div className="todo-text">{todo.text}</div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

const Todo = ({ todos, categoryId, onAddTodo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo, categoryId);
      setNewTodo('');
    }
  };

  const filteredTodos = todos.filter(todo => todo.categoryId === categoryId);

  return (
    <div className="todo-container">
      <h2>Tasks</h2>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add new Task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">There are no tasks available..</div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
              onEdit={onEditTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
