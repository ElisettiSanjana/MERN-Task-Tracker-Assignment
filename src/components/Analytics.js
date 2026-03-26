import React from 'react';

const Analytics = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'Done').length;
  const pending = tasks.filter(t => t.status !== 'Done').length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
      <div style={{ background: '#4CAF50', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
        <h3>{total}</h3>
        <p>Total Tasks</p>
      </div>
      <div style={{ background: '#2196F3', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>
      <div style={{ background: '#FF9800', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
        <h3>{pending}</h3>
        <p>Pending</p>
      </div>
      <div style={{ background: '#9C27B0', color: 'white', padding: '20px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
        <h3>{percentage}%</h3>
        <p>Completion</p>
      </div>
    </div>
  );
};

export default Analytics;