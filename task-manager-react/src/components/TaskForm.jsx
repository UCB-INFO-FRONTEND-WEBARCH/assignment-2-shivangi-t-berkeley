import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTask(trimmed);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={submit}>
      {/* <label htmlFor="new-task" className="sr-only">New task</label> */}
      <input
        id="new-task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        aria-label="Add task"
      />
      <button type="submit">Add</button>
    </form>
  );
}