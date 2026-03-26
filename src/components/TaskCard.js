import React from 'react';

const TaskCard = ({ task, onDelete, onEdit, onComplete }) => {
  const priorityColor = { Low: 'green', Medium: 'orange', High: 'red' };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '10px', background: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ margin: 0, textDecoration: task.status === 'Done' ? 'line-through' : 'none' }}>{task.title}</h4>
        <span style={{ color: priorityColor[task.priority], fontWeight: 'bold' }}>{task.priority}</span>
      </div>
      <p style={{ color: '#666', margin: '8px 0' }}>{task.description}</p>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ background: '#e0e0e0', padding: '4px 8px', borderRadius: '4px' }}>{task.status}</span>
        {task.dueDate && <span style={{ color: '#999' }}>Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
        <button onClick={() => onComplete(task)} style={{ padding: '5px 10px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>✓ Done</button>
        <button onClick={() => onEdit(task)} style={{ padding: '5px 10px', background: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Edit</button>
        <button onClick={() => onDelete(task._id)} style={{ padding: '5px 10px', background: '#f44336', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;