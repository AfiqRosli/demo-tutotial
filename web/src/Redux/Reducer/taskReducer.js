const intialState = [
  {
    id: 0,
    name: "John",
    taskName: "Learning CI/CD",
    isChecked: "Active",
  },

  {
    id: 1,
    name: "Jane",
    taskName: "Writing Documentation",
    isChecked: "Active",
  },
];

const taskReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      state = [...state, action.payload];
      return state;
    case "UPDATE_TASK":
      const updateState = state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state = updateState;
      return state;
    case "DELETE_TASK":
      const filterTasks = state.filter(
        (task) => task.id !== action.payload && task
      );
      state = filterTasks;
      return state;
    default:
      return state;
  }
};

export default taskReducer;
