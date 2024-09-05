import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Column from './Column';
import SearchBar from './SearchBar';
import AddTaskModal from './AddTaskModal';
import { fetchTasks } from '../redux/actions/taskActions';

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="kanban-board">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="board-columns">
        {['To Do', 'In Progress', 'Peer Review', 'Done'].map(stage => (
          <Column key={stage} stage={stage} tasks={filteredTasks} />
        ))}
      </div>
      <AddTaskModal />
    </div>
  );
};

export default KanbanBoard;
