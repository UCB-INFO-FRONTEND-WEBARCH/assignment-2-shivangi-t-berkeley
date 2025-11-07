import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={!!task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={task.completed ? `Mark "${task.text}" incomplete` : `Mark "${task.text}" complete`}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>
    </li>
  );
}