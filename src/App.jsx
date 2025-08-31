import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
        {/* <form className=" w-1/3 flex flex-col bg-green-200 p-8 rounded-md gap-4">
          <input
            className="border border-green-800 p-2 rounded-md outline-none"
            placeholder="Title"
          />
          <input
            className="border border-green-800 p-2 rounded-md outline-none"
       
            placeholder="Assigned To"
          />
          <select className="border border-green-800 p-2 rounded-md outline-none">
            Status
            <option selected>Choose a status</option>
            <option>Pending</option>
            <option>Inprogress</option>
            <option>Done</option>
          </select>
        </form> */}
        <h1 className="font-bold text-2xl my-4">All Todos Here</h1>
        <div className="w-1/2  flex items-start">
          <button className="px-2 py-1 bg-green-400 rounded-sm font-semibold text-white cursor-pointer my-2">
            + ADD NEW
          </button>
        </div>

        <table className="w-1/2 text-center table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border border-green-500">S no.</th>
              <th className="p-4 border border-green-500">Title</th>
              <th className="p-4 border border-green-500">Assigned To</th>
              <th className="p-4 border border-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-green-500">1</td>
              <td className="p-4 border border-green-500">Aman Pagal</td>
              <td className="p-4 border border-green-500">Paglu Aman</td>
              <td className="p-4 border border-green-500  flex  items-center justify-center gap-2">
                <button className="px-2 py-1 bg-yellow-400 rounded-sm font-semibold text-white cursor-pointer">
                  Edit
                </button>
                <button className="px-2 py-1 bg-red-400 rounded-sm font-semibold text-white cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
