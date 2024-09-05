import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const AddTaskModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle) {
      dispatch(addTask({ title: taskTitle, description: taskDescription, stage: 'To Do' }));
      setShowModal(false);
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>+ Add Task</button>
      {showModal && (
        <div className="modal">
          <h2>Add New Task</h2>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
