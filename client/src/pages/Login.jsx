import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
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
