import Task from './Task';

const Tasks = ({ tasks, deleteTask, onReminderUpdate }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            onReminderUpdate={onReminderUpdate}
          />
        ))
      ) : (
        <h3>No Tasks to display</h3>
      )}
    </>
  );
};

export default Tasks;
