import  React, { useState } from 'react';
import './App.css';
import MemberForm from "./components/MemberForm.js";
import MemberCard from "./components/MemberCard.js";

function App() {

  const [team, setTeam] = useState([]);

  const teamChanger = newMember => {
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Welcom to Team Lambda</h1>
      <h2>Join Our Team!</h2>

      <MemberForm teamChanger={teamChanger} />

      <h2>The team:</h2>

        {/* {map members & index for membercards} */}
    </div>
  );
}

export default App;
