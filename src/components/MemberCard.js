import React from "react";

export default function Display(props) {
  console.log("MemberCard props ", props);
  return (
    <div className="team-container">
      <h3>Name: {props.newMember.name}</h3>
      <h4>Email: {props.newMember.email}</h4>
      <h4>JobTitle: {props.newMember.jobtitle}</h4>
    </div>
  );
}