import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
      setPriority(editTask.priority);
      setDueDate(editTask.dueDate ? editTask.dueDate.split('T')[0] : '');
    }
  }, [editTask]);

  const handleSubmit = () => {
    if (!title) return alert('Title required!');
    onSubmit({ title, description, status, priority, dueDate });
    setTitle(''); setDescription(''); setStatus('Todo'); setPriority('Medium'); setDueDate('');
  };

  return (
    <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>{editTask ? 'Edit Task' : 'Add New Task'}</h3>
      <input type="text" placeholder="Title*" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }} />
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ padding: '10px', marginRight: '10px', marginBottom: '10px' }}>
        <option>Todo</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ padding: '10px', marginRight: '10px', marginBottom: '10px' }}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={{ padding: '10px', marginBottom: '10px' }} />
      <div>
        <button onClick={handleSubmit} style={{ padding: '10px 20px', background: '#333', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}>{editTask ? 'Update' : 'Add Task'}</button>
        {editTask && <button onClick={onCancel} style={{ padding: '10px 20px', background: '#999', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>}
      </div>
    </div>
  );
};

export default TaskForm;