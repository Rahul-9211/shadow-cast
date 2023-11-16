// reducers/counterReducer.js
const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    // console.log("starte ", state)
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 4 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  