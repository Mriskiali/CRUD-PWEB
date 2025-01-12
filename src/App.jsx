import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import UserList from "./UserList";
import EditUser from "./EditUser";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
