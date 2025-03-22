import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="page-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          style={{ margin: "8px" }}
        />
        <button type="submit" style={{ margin: "8px", padding: "8px 16px" }}>
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
