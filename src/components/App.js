import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (deletedTask) => {
    const updatedTasks = tasks.filter((task) => deletedTask.text !== task.text)
    setTasks(updatedTasks)
  }

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);
   
  const handleCategory = (category) => {
    setSelectedCategory(category);
  }

  const handleAddNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} handleCategory={handleCategory}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddNewTask}/>
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
