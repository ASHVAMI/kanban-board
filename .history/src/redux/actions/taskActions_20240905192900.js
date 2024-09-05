export const fetchTasks = () => {
    return {
      type: 'FETCH_TASKS',
    };
  };
  
  export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const moveTask = (taskId, newStage) => {
    return {
      type: 'MOVE_TASK',
      payload: { taskId, newStage },
    };
  };
  