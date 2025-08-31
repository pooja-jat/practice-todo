import { useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import CreateTodo from "./components/CreateTodo";

function App() {
  const todos = useSelector((state) => state.todos);

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <>
      {visible && <CreateTodo setVisible={setVisible} />}

      <div className="min-h-screen bg-gren-50 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl my-4">All Todos Here</h1>

        <div className="w-2/3 flex items-start">
          <button
            onClick={handleClick}
            className="px-2 py-1 bg-green-400 rounded-sm font-semibold text-white cursor-pointer my-2"
          >
            + ADD NEW
          </button>
        </div>

        <table className="w-2/3 text-center table-auto">
          <thead>
            <tr>
              <th className="p-4 border border-green-500">S no.</th>
              <th className="p-4 border border-green-500">Title</th>
              <th className="p-4 border border-green-500">Assigned To</th>
              <th className="p-4 border border-green-500">Status</th>
              <th className="p-4 border border-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              let statusColor = "";
              if (todo.status === "Pending") {
                statusColor = "bg-gray-200 text-lg text-gray-500";
              }
              if (todo.status === "Inprogress") {
                statusColor = "bg-yellow-200 text-lg text-yellow-800";
              }
              if (todo.status === "Done") {
                statusColor = "bg-green-200 text-lg text-green-700";
              } ``
              return (
                <tr>
                  <td className="p-4 border border-green-500">{index + 1}</td>
                  <td className="p-4 border border-green-500">{todo.title}</td>
                  <td className="p-4 border border-green-500">
                    {todo.assignedto}
                  </td>
                  <td className={`p-4 border border-green-500 ${statusColor}`}>
                    {todo.status}
                  </td>
                  <td className="p-4 border border-green-500  flex  items-center justify-center gap-2">
                    <button className="px-2 py-1 bg-yellow-400 rounded-sm font-semibold text-white cursor-pointer">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-400 rounded-sm font-semibold text-white cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
