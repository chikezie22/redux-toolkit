import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        console.log("Dispatching action:", action); // Log action
        state.push(action.payload);
        console.log("Current state after action:", state); // Log current state
      },
      prepare(todo) {
        const id = nanoid();
        return {
          payload: {
            id,
            text: todo,
          },
        };
      },
    },
  },
});
console.log(initialState);
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
