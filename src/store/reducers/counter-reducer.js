const initialState = {
  counter: 0
};

const setCounter = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_ASYNC':
      return {
        ...state,
        counter: state.counter + action.payload
      };

    case 'DEC':
      return {
        ...state,
        counter: state.counter - action.payload
      };

    case 'DEC_ASYNC':
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
};

export default setCounter;
