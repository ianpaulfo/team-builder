import React from "react";
import MemberForm from "./MemberForm";

export default function Display(props) {
  console.log("MemberCard props ", props);
  return (
    <div className="team-container">
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <h4>JobTitle: {props.jobtitle}</h4>
    </div>
  );
}