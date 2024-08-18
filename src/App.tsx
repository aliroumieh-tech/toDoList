import { createContext, useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import { v4 as uuidv4 } from "uuid";

// Define the shape of a task
interface Task {
  id: string;
  inputValue: string;
  languagesUsed: string[];
  taskState: "To Do" | "Doing" | "Done";
}

// Define the context shape
interface TasksContextType {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setlanguagesUsed: React.Dispatch<React.SetStateAction<string[]>>;
  SetTaskState: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  languagesUsed: string[];
  taskState: string;
  addTask: () => void;
  tasks: Task[];
  fetchTasks: () => void;
}

// Initialize the context with a default value
const TasksContext = createContext<TasksContextType | null>(null);

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [languagesUsed, setlanguagesUsed] = useState<string[]>([]);
  const [taskState, SetTaskState] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a task to Firestore
  const addTask = async () => {
    if (
      inputValue.trim() === "" ||
      languagesUsed.length === 0 ||
      taskState === ""
    ) {
      alert("please add your task info");
      return;
    } else {
      try {
        const data = { inputValue, languagesUsed, taskState };
        const randomId = uuidv4();

        await setDoc(doc(db, "tasks", randomId), data);
        await fetchTasks(); // Fetch tasks after adding a new one
        console.log(tasks);
      } catch (error) {
        alert("Error adding task!!");
        console.error(error);
      }
    }
  };

  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksData: Task[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">), // Type assertion for Firestore data
      }));
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when component mounts
  }, []);

  return (
    <TasksContext.Provider
      value={{
        setInputValue,
        setlanguagesUsed,
        SetTaskState,
        inputValue,
        languagesUsed,
        taskState,
        addTask,
        tasks,
        fetchTasks,
      }}
    >
      <TaskInput />
      <TaskList />
    </TasksContext.Provider>
  );
}

export default App;
export { TasksContext };
