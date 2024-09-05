const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return [...state];
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'MOVE_TASK':
      return state.map(task =>
        task.id === action.payload.taskId
          ? { ...task, stage: action.payload.newStage }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
