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
