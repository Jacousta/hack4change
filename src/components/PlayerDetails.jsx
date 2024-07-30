import React from 'react';
import Navbar from './Navbar';
function PlayerDetails() {
  return (
    <div className="player-details">
      <div>
      <Navbar/>
      </div>
      <h1 style={{ textAlign: "center" }}>Player Details</h1>
      <p>Details about the player will be displayed here.</p>
    </div>
  );
}

export default PlayerDetails;
