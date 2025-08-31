import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const CreateTodo = ({ setVisible }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    assignedto: "",
    status: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addTodo(form));
    setVisible(false);
  };

  const handleCancle = () => {
    setVisible(false);
  };

  return (
    <div class="absolute flex items-center justify-center w-full h-screen">
      <form class="relative p-6 min-w-1/2 min-h-[200px] bg-white rounded-lg shadow-sm flex flex-col gap-4">
        <input
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border border-green-800 p-2 rounded-md outline-none"
          placeholder="Title"
        />
        <input
          onChange={(e) => setForm({ ...form, assignedto: e.target.value })}
          className="border border-green-800 p-2 rounded-md outline-none"
          placeholder="Assigned To"
        />
        <select
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border border-green-800 p-2 rounded-md outline-none"
        >
          Status
          <option selected>Choose a status</option>
          <option>Pending</option>
          <option>Inprogress</option>
          <option>Done</option>
        </select>
        <div className="flex items-center justify-between space-x-2">
          <button
            onClick={handleSave}
            className="w-full  px-2 py-1 bg-yellow-400 rounded-sm font-semibold text-white cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={handleCancle}
            className=" w-full px-2 py-1 bg-red-400 rounded-sm font-semibold text-white cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
