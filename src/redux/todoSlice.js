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
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
