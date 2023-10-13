import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
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
      await axios.post('http://localhost:8800/api/auth/login', inputs);
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
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
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
