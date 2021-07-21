export const increment = counter => {
  return {
    type: "INC",
    payload: counter
  };
};

export const decrement = counter => {
  return {
    type: "DEC",
    payload: counter
  };
};

export const incrementAsync = counter => {
  return {
    type: "INC_ASYNC",
    payload: counter
  };
};

export const decrementAsync = counter => {
  return {
    type: "DEC_ASYNC",
    payload: counter
  }
}
