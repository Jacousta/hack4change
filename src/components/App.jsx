import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Dashboard from './Dashboard';
import PlayerDetails from './PlayerDetails';
import PlayerProfile from './PlayerProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/player-details" element={<PlayerDetails />} />
          <Route path="/player-profile" element={<PlayerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
