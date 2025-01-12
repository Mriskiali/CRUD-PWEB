import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="form-container">
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/users/edit/${user.id}`}>Edit</Link>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
