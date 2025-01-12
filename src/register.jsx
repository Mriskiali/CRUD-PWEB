import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      const emailExists = users.some((user) => user.email === email);

      if (emailExists) {
        setErrorMessage("Email sudah terdaftar");
        return;
      }

      const newUser = { name, email, password };
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      alert("Registrasi berhasil!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Gagal melakukan registrasi");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label>Confirm Password:</label>
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            placeholder="Confirm Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
