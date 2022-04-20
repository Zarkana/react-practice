import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    { id: 1, text: "Go to the Doctor", day: "Monday", reminder: true },
    { id: 2, text: "Go to the Store", day: "Monday", reminder: false },
    { id: 3, text: "Go to the Mechanic", day: "Monday", reminder: true },
  ])

  const toggleShowAddTask = (id) => {
    setShowAddTask(!showAddTask)
  }

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        onToggleShowAddTask={toggleShowAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  )
}

export default App
