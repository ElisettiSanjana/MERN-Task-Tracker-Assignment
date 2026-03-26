import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/NavBar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Analytics from '../components/Analytics';

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPriority, setFilterPriority] = useState('');

  const config = { headers: { Authorization: `Bearer ${user?.token}` } };

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks', config);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (taskData) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', taskData, config);
      fetchTasks();
    } catch (err) { console.log(err); }
  };

  const handleUpdate = async (taskData) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${editTask._id}`, taskData, config);
      setEditTask(null);
      fetchTasks();
    } catch (err) { console.log(err); }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, config);
      fetchTasks();
    } catch (err) { console.log(err); }
  };

  const handleComplete = async (task) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { ...task, status: 'Done' }, config);
      fetchTasks();
    } catch (err) { console.log(err); }
  };

  const filteredTasks = tasks.filter(task => {
    return (
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? task.status === filterStatus : true) &&
      (filterPriority ? task.priority === filterPriority : true)
    );
  });

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '900px', margin: '20px auto', padding: '0 20px' }}>
        <Analytics tasks={tasks} />
        <TaskForm onSubmit={editTask ? handleUpdate : handleCreate} editTask={editTask} onCancel={() => setEditTask(null)} />
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input type="text" placeholder="Search by title..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ padding: '10px', flex: 1 }} />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: '10px' }}>
            <option value="">All Status</option>
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)} style={{ padding: '10px' }}>
            <option value="">All Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <TaskList tasks={filteredTasks} onDelete={handleDelete} onEdit={setEditTask} onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default Dashboard;