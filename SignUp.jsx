import React, { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered ${name} with email ${email}`);
  };

  return (
    <div className="page-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
          style={{ margin: "8px" }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          style={{ margin: "8px" }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          style={{ margin: "8px" }}
        />
        <button type="submit" style={{ margin: "8px", padding: "8px 16px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
