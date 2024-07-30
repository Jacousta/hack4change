import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
function PlayerProfile() {
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    // Retrieve the player's name from localStorage
    const name = localStorage.getItem('playerName');
    setPlayerName(name);
  }, []);

  return (
    <div className="player-profile">
      <div>
      <Navbar/>
      </div>
      <h1 style={{ textAlign: "center" }}>Player Profile</h1>
      {playerName ? (
        <div>
          <h2>{playerName}</h2>
          <p>Abilities and skill levels will be displayed here.</p>
          {/* Display more details about the player */}
        </div>
      ) : (
        <p>No player information available.</p>
      )}
    </div>
  );
}

export default PlayerProfile;
