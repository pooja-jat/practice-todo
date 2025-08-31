import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      {
        id: crypto.randomUUID(),
        title: "Aman 2",
        assignedto: "amanyo",
        status: "done",
      },
      {
        id: crypto.randomUUID(),
        title: "Aman 4",
        assignedto: "amanyooooo",
        status: "inprogress",
      },
    ],
  },
  reducer: {},
});

export default todoSlice.reducer;
