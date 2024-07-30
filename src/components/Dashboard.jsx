import React from 'react';
import Navbar from './Navbar';
function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Navbar/>
      </div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <p>Welcome to the AI-Driven Skill Exchange Network!</p>
    </div>
  );
}
export default Dashboard;
