const projectReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return state + 1;
    default:
      return state;
  }
};

export default projectReducer;
