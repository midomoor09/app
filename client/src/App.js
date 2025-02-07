import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.43:5000/users").then((res) => setUsers(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://192.168.1.43:5000/submit", formData).then((res) => {
      setUsers(res.data.users);
      setFormData({ username: "", password: "" });
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>User List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
