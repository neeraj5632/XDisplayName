import "./App.css";

import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display full name after submission
    setFullName(`Full Name: ${firstName} ${lastName}`);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Full Name Display</h1>

      {/* Form element */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <br />

        {/* Button element */}
        <button type="submit">Submit</button>
      </form>

      {/* Display full name */}
      {fullName && <p>{fullName}</p>}
    </div>
  );
}

export default App;
