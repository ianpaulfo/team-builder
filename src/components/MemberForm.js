import React, { useState } from "react";

export default function Forms(props) {
    const [user, setUser] = useState({ name: "", email: "", jobtitle: "" });
    const handleChange = event => {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        console.log(
          "handleChange",
          event.target.name,
          event.target.value,
          updatedUser
        );

        setUser(updatedUser);
      };


      const handleSubmit = event => {
        event.preventDefault();
        console.log("username", user);
        props.teamChanger(user);
      };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <div className="entry">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={user.name}
                    onChange={event => handleChange(event)}
                />
                </div>
            </label>
            <label>
                E-Mail
                <div className="entry">
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    value={user.email}
                    onChange={event => handleChange(event)}
                />
                </div>
            </label>
            <label>
                Job-Title
                <div className="entry">
                <input
                    type="text"
                    name="jobtitle"
                    placeholder="Enter your Job Title"
                    value={user.jobtitle}
                    onChange={event => handleChange(event)}
                />
                </div>
            </label>
        <button>Submit</button>
        </form>
      );
    }