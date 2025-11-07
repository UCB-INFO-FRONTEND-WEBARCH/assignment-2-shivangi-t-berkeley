import React from 'react';

export default function TaskCounter({ tasks = [], filter = 'all', setFilter = () => {} }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;
  
  let displayCount, displayText;
  switch (filter) {
    case 'completed':
      displayCount = completed;
      displayText = `completed task${completed === 1 ? '' : 's'}`;
      break;
    case 'active':
      displayCount = active;
      displayText = `active task${active === 1 ? '' : 's'}`;
      break;
    default: // 'all'
      displayCount = active;
      displayText = `task${active === 1 ? '' : 's'} remaining`;
      break;
  }

  return (
    <div className="task-counter" aria-live="polite">
      <div className="filters" role="toolbar" aria-label="Task filters">
        <button
          type="button"
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter('active')}
          aria-pressed={filter === 'active'}
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => setFilter('completed')}
          aria-pressed={filter === 'completed'}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>
      <div className="counts">
        <strong>{displayCount}</strong> {displayText} — {total} total
      </div>
    </div>
  );
}