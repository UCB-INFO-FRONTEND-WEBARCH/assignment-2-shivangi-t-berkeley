import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const Task = (id, text, completed = false) => ({ id, text, completed });

  const addTask = (taskText) => {
    setTasks(prev => [...prev, Task(Date.now(), taskText, false)]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'active') return !t.completed;
    return true;
  });

  return (
    <div className="app">
      <header>
        <nav className="nav">
          <img src="./assets/menu_icon.png" alt="menu" />
          <input id="search" placeholder="Quick Find" type="search" />
          <div id="done-count" aria-hidden="true">
            <img src="./assets/check_icon.png" alt="" />
            <span>{tasks.length}/{completedCount}</span>
            <span className="sr-only">{completedCount} of {tasks.length} tasks completed</span>
          </div>
        </nav>
      </header>

      <main>
        <section id="content">
          <aside id="folders">
            <ul id="folders-list">
              <li className="folder"><img src="assets/inbox_icon.png" alt="inbox icon" /> Inbox <span className="folder-task-count">5</span></li>
              <li className="folder"><img src="assets/calendar_icon.png" alt="calendar icon" /> Today <span className="folder-task-count">2</span></li>
              <li className="folder"><img src="assets/upcoming_icon.png" alt="upcoming icon" /> Upcoming</li>
            </ul>
          </aside>

          <section id="tasks-panel">
            <h1>Inbox</h1>

            <TaskForm onAddTask={addTask} />

            <TaskCounter tasks={tasks} filter={filter} setFilter={setFilter} />

            <TaskList
              tasks={filteredTasks}
               onToggle={toggleTask}
               onDelete={deleteTask}
             />

          </section>
        </section>
      </main>
    </div>
  );
}