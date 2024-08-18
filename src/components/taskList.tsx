import { useContext } from "react";
import { TasksContext } from "../App";
import TrashIcon from "../assets/icons8-trash-30.png";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

// Define the shape of a task
interface Task {
  id: string;
  inputValue: string;
  languagesUsed: string[];
  taskState: "To Do" | "Doing" | "Done";
}

const TaskList = () => {
  const { tasks, fetchTasks } = useContext(TasksContext);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      await fetchTasks(); // Refresh the list of tasks
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex justify-between mt-10 border-t-2 border-slate-200 pt-10">
      {/* To Do Section */}
      <div className="flex flex-col items-start flex-1">
        <h1 className="text-xl font-bold">🎯 To Do</h1>
        {tasks.filter((task: Task) => task.taskState === "To Do").length > 0 ? (
          tasks
            .filter((task: Task) => task.taskState === "To Do")
            .map((taskData: Task) => (
              <div
                className="flex flex-col items-start justify-between border border-slate-300 p-3 rounded mt-2 w-80 h-24"
                key={taskData.id}
              >
                <h3 className="text-lg font-semibold">{taskData.inputValue}</h3>
                <div className="flex justify-between w-full">
                  <div>
                    {taskData.languagesUsed.map(
                      (lang: string, index: number) => (
                        <button
                          key={index}
                          className="mr-2 text-white bg-sky-500 p-1 text-sm rounded"
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </div>
                  <img
                    src={TrashIcon}
                    alt="delete icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDelete(taskData.id)}
                  />
                </div>
              </div>
            ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>

      {/* Doing Section */}
      <div className="flex flex-col items-start flex-1">
        <h1 className="text-xl font-bold">🌟 Doing</h1>
        {tasks.filter((task: Task) => task.taskState === "Doing").length > 0 ? (
          tasks
            .filter((task: Task) => task.taskState === "Doing")
            .map((taskData: Task) => (
              <div
                className="flex flex-col items-start justify-between border border-slate-300 p-3 rounded mt-2 w-80 h-24"
                key={taskData.id}
              >
                <h3 className="text-lg font-semibold">{taskData.inputValue}</h3>
                <div className="flex justify-between w-full">
                  <div>
                    {taskData.languagesUsed.map(
                      (lang: string, index: number) => (
                        <button
                          key={index}
                          className="mr-2 text-white bg-sky-500 p-1 text-sm rounded"
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </div>
                  <img
                    src={TrashIcon}
                    alt="delete icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDelete(taskData.id)}
                  />
                </div>
              </div>
            ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>

      {/* Done Section */}
      <div className="flex flex-col items-start flex-1">
        <h1 className="text-xl font-bold">✅ Done</h1>
        {tasks.filter((task: Task) => task.taskState === "Done").length > 0 ? (
          tasks
            .filter((task: Task) => task.taskState === "Done")
            .map((taskData: Task) => (
              <div
                className="flex flex-col items-start justify-between border border-slate-300 p-3 rounded mt-2 w-80 h-24"
                key={taskData.id}
              >
                <h3 className="text-lg font-semibold">{taskData.inputValue}</h3>
                <div className="flex justify-between w-full">
                  <div>
                    {taskData.languagesUsed.map(
                      (lang: string, index: number) => (
                        <button
                          key={index}
                          className="mr-2 text-white bg-sky-500 p-1 text-sm rounded"
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </div>
                  <img
                    src={TrashIcon}
                    alt="delete icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDelete(taskData.id)}
                  />
                </div>
              </div>
            ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
