import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      {
        id: crypto.randomUUID(),
        title: "Aman 2",
        assignedto: "amanyo",
        status: "Done",
      },
      {
        id: crypto.randomUUID(),
        title: "Aman 4",
        assignedto: "amanyooooo",
        status: "Inprogress",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      action.payload.id = crypto.randomUUID();
      state.todos = [...state.todos, action.payload];
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
