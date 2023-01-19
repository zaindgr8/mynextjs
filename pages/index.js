import React, { useState } from 'react';

const Index = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target.elements.task.value;
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add a task" />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Index;
