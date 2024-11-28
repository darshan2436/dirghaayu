import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Send login data to backend
    const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        // If login successful, store the token
        localStorage.setItem('token', data.token);
        alert("Login successful!");
        navigate('/');
    } else {
        setError(data.message);  // Show error message
    }

    setLoading(false);
};

  return (
    <div className="main flex-col opacity-90">
      <div className="body flex items-center justify-center min-h-screen">
        <div className="Right flex flex-col my-20 p-10 border rounded-md bg-slate-200">
          <div className="left mx-10">
            <img src="image/logo.jpg" className="mx-10 my-11 rounded-2xl h-36" alt="Logo" />
          </div>

         
          <form onSubmit={handleSubmit} className='flex flex-col'>
            {/* Name input */}
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-3 border border-slate-300 py-2 rounded-md hover:bg-slate-50"
            />

         
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="my-3 border border-slate-300 py-2 rounded-md hover:bg-slate-50"
            />

            {error && <div className="text-red-500 text-sm my-2">{error}</div>}

            
            <button
              type="submit"
              className="bg-blue-500 px-10 py-2 my-3 rounded-md hover:bg-blue-600 font-bold"
            >
              {loading ? 'Logging in ...':"Login"}
            </button>

            
            <button className="justify-center text-center text-sm text-green-500 hover:underline h-10">
              Forgotten Password?
            </button>

          
            <Link to="/register" className="my-3">
              <button className="bg-green-500 px-10 w-full py-3 rounded-md">
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
