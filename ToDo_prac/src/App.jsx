import { useRef, useState } from 'react'

import './App.css'

const Form = ({addTask}) => {
  const [newTask, setNewTask] = useState()

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(newTask)
  }
  return(
    <form onSubmit={(e) => handleSubmit(e) }>
      <label >
          Tarea
          <input type="text" name="task" placeholder="ingrese tarea..."
          onChange={handleChange}
          />
      </label>
      <button type="submit">Add To-Do</button>
  </form>

  )
  
}

const Tasks = ({tasks, completeTask, deleteTask, editTask}) => {
  return (
    <section id="list-tasks">
      {
        tasks.length > 0 ? 
          <ul id="tasks">
            {
                tasks.map(task => (
                    <Task {...task} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} key={task.id}/>
                  ))
            }  
          </ul>
        :
        <p style={{textAlign:'center'}}>NO hay tareas</p>
      
      }
    </section>
  )
}

const Task = ({id,task, state, completeTask, deleteTask, editTask}) => {

  const handleCompleteTask = (e) => {
    completeTask(e)
  }
  const handleDeleteTask = (e) => {
    deleteTask(e)
  }
  const handleEditTask = (e) => {
    editTask(e)
  }

  return(
    <li className="task" id={id}>
            {task}
            <div className='task_controls'>
                <input id={`status-${id}`} onChange={(e) => handleCompleteTask(e)}  type="checkbox" name='task_status'
                value={state}
                />
                <span onClick={handleDeleteTask} id={`delete-${id}`}>❌</span>
                <span onClick={handleEditTask} id={`edit-${id}`}>✍</span>
            </div>
        </li>
  )
}


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    let newtask = {
        id: Math.floor( Math.random() * 100) + 1,
        task: task,
        state: false // TODO
    }
    console.log(newtask);
    setTasks([...tasks, newtask])
  }


  const completeTask = (e) => {
    let id = e.target.id
    id = id.slice(7)
    // useRef
    let updateTasks = tasks.map(task => {
        if (task.id == id) {
            return {...task, state: !task.state}
        }
        return task
    })
    setTasks(updateTasks)
  }

  const deleteTask = (e) => {
    let htmlElement = e.target.id 
    let id = htmlElement.slice(7)
            console.log(id);
    const updateTasks = tasks.filter( task => task.id != id)
    setTasks(updateTasks)
  }

  const editTask = (e) => {
    let htmlElement = e.target.id
    let id = htmlElement.slice(5)
    let task = tasks.find( task => task.id == id)
    let edit = prompt('edit', task.task)
    const updateTasks = tasks.map(tarea => {
        if (tarea.id == id) {
            return {...tarea, task:edit}
        }
        return tarea
    })
    console.log(updateTasks);
    setTasks(updateTasks)
  }
  return (
    <>
      <header>
          <h1>To-Do List</h1>
      </header>
      <main>
          <Form addTask={addTask}/>
          <Tasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask}/>
      </main>
    </>
  )
}

export default App
