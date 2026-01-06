import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todoSlice";

const CreateTodo = ({ setVisible, updateTodo, setUpdateTodo }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: updateTodo ? updateTodo.title : "",
    assignedTo: updateTodo ? updateTodo.assignedTo : "",
    status: updateTodo ? updateTodo.status : "",
  });

  const handleSave = (e) => {
    e.preventDefault();

    if (updateTodo) {
      form.id = updateTodo.id;
      dispatch(editTodo(form));
    } else {
      dispatch(addTodo(form));
    }
    setForm({ title: "", assignedTo: "", status: "" });
    setUpdateTodo(null);
    setVisible(false);
  };

  const handleCancel = () => {
    setForm({ title: "", assignedTo: "", status: "" });
    setUpdateTodo(null);
    setVisible(false);
  };

  return (
    <div className="absolute flex items-center justify-center w-full h-screen ">
      <form className="relative p-6 min-w-1/2 min-h-[200px] bg-green-50 rounded-lg shadow-sm flex flex-col gap-4">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border border-green-800 p-2 rounded-md outline-none"
          placeholder="Title"
        />
        <input
          value={form.assignedTo}
          onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
          className="border border-green-800 p-2 rounded-md outline-none"
          placeholder="Assigned To"
        />
        <select
          value={form.status}
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
            {updateTodo ? "Update" : "Save"}
          </button>
          <button
            onClick={handleCancel}
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
