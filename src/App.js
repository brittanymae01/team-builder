import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers'

function App() {
  const [teamMember, SetTeamMemeber] = useState([{
    id: 1,
    name: 'Bob',
    email: 'bob.com',
    role: 'front-end'
  }])
  return (
    <div className="App">
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
