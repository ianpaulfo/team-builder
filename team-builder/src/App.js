import React, { useState } from 'react';
import logo from './logo.svg';
import Members from "./Members";
import teamMemberForm from "./teamMemberForm";
import './App.css';

function App() {
  const [team, setTeam] = useState([
    { name: "Ian", role: "Student", email: "ian@lambda.com" },
    { name: "Diva", role: "support", email: "diva@lambda.com" },
  ]);
 
  return (
    <div>
      <h1>My Team-Builder project</h1>
      <teamMemberForm setTeam={setTeam} />
      {team.map(person => (
        <Members key={person.name} person={person} />
      ))}
    </div>

  );
}

export default App;
