import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks = [], onToggle, onDelete }) {
  if (!tasks.length) {
    return <div className="task-list-empty">No tasks yet</div>;
  }

  return (
    <ul className="task-list" aria-live="polite">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}