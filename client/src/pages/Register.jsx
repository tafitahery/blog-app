import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
      navigate('/login');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          required
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Regiser</button>
        {error && <p>{error}</p>}
        <span>
          Don you have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
