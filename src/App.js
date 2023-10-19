import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import axios from 'axios';

//GET tasks
const res = await axios.get(`http://localhost:5000/tasks`);

function App() {
  const [tasks, setTasks] = useState([]);

  //Toggle form display
  const [toggleForm, setToggleForm] = useState(false);

  //Add Task

  const addTask = async task => {
    //const id = Math.trunc(Math.random() * 100);
    try {
      const res = await axios.post(`http://localhost:5000/tasks/`, { ...task });
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error(error);
    }

    // setTasks([...tasks, { ...task, id }]);
  };

  //Delete Tasks
  const deleteTask = async id => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
    } catch (error) {
      console.error(error);
    }

    setTasks(
      tasks.filter(task => {
        return task.id !== id;
      })
    );
  };

  // Update Reminder
  const updateReminder = async id => {
    //GET task for update
    const oneTask = await axios.get(`http://localhost:5000/tasks/${id}`);
    //update the task
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${id}`, {
        ...oneTask.data,
        reminder: !oneTask.data.reminder,
      });
    } catch (error) {
      console.error(error);
    }

    setTasks(
      tasks.map(task => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };

  //Display tasks from server
  useEffect(() => {
    setTasks(res.data);
  }, []);

  return (
    <div className="container">
      <Header
        onToggleAdd={() => setToggleForm(!toggleForm)}
        toggleForm={toggleForm}
        title="Task Tracker"
      />
      {toggleForm ? <AddTask onSubmit={addTask} /> : ''}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        onReminderUpdate={updateReminder}
      />
    </div>
  );
}

export default App;
