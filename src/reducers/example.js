const initialState = {
  name: "Charlie",
  number: 0
};
export const example = (state = initialState, action) => {
  if (action.type === "ADD") {
    return { ...state, number: state.number + 1 };
  }
  return state;
};
