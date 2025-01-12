import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:5000/users/${id}`);
    const data = await response.json();
    setUser(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/users");
  };

  return (
    <div className="form-container">
      <h2>Edit Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
