import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers'
import Form from './components/Form'

function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 1,
    name: 'Bob',
    email: 'bob.com',
    role: 'front-end'
  }])

  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };
  return (
    <div className="App">
      <Form teamMember={addTeamMember} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
