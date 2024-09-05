
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card" draggable>
      <h3>{task.title}</h3>
      <p>{task.description.length > 50 ? task.description.substring(0, 50) + '...' : task.description}</p>
    </div>
  );
};

export default TaskCard;
