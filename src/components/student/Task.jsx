import { useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;

    const task = {
      id: Date.now(), // unique key
      ...newTask,
      completed: false,
    };
    setTasks([task, ...tasks]);
    setNewTask({ title: "", description: "", priority: "Low", dueDate: "" });
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
    console.log("Input changed:", name, value);

  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="mt-24 md:fixed md:w-4/5 w-full right-0 h-screen rounded-2xl p-4 md:p-6 overflow-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Task Manager</h2>
        <div className="text-sm text-gray-600 mt-2">
          Total: {total} | Completed: {completed} | Pending: {pending}
        </div>
      </div>

      {/* Add Task Form */}
      <div className="bg-slate-200 p-4 md:w-3/5 w-[23%] rounded shadow mb-6">
        <input type="text" name="title" value={newTask.title} onChange={handleInputChange} placeholder="Title" className="w-full p-2 mb-2 border rounded" />
        <textarea name="description" value={newTask.description} onChange={handleInputChange} placeholder="Description" className="w-full p-2 mb-2 border rounded" />
        <div className="flex flex-col gap-4 mb-2">
          <div className="flex gap-4 mb-2">
            <select name="priority" value={newTask.priority} onChange={handleInputChange} className="border p-2 rounded">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleInputChange}className="border p-2 rounded" />         
          </div>
          <button onClick={handleAddTask} className="bg-blue-500 text-white mx-auto px-4 py-2 rounded" >
            Add Task
          </button>
        </div>
      </div>
      {/* Task List */}
      <div className="md:w-3/5 w-[23%]">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-400">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={`mb-4 p-4 rounded shadow ${task.completed ? "bg-green-100" : "bg-yellow-100" }`}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {task.title}
                  <span className="ml-2 text-sm text-gray-500">
                    ({task.priority})
                  </span>
                </h3>
                <div className="flex gap-2">
                  <button onClick={() => toggleComplete(task.id)} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button onClick={() => handleDelete(task.id)} className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              <p className="text-sm text-gray-500">
                Due: {task.dueDate || "Not set"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Task;
