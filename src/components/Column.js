import React from 'react';
import TaskCard from './TaskCard';

const Column = ({ stage, tasks }) => {
  const filteredTasks = tasks.filter(task => task.stage === stage);

  return (
    <div className="kanban-column">
      <h2>{stage}</h2>
      <div className="tasks">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
