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

    deleteTodo: (state, action) => {
      return state?.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const existingTodo = state.find((todo) => todo.id === action.payload?.id);
      existingTodo ? (existingTodo.text = action.payload.text) : state.text;
      return state;
    },
  },
});
console.log(initialState);
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
