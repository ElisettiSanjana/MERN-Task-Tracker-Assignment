import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onEdit, onComplete }) => {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No tasks found!</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete} />
      ))}
    </div>
  );
};

export default TaskList;