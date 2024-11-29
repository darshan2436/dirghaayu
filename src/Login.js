import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Assets/logo.jpg';  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email and password
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

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
        window.location.reload();
    } else {
        setError(data.message);  // Show error message
    }

    setLoading(false);

    // If everything is valid, proceed with form submission
    console.log('Form submitted successfully');
  };

  return (
    <div className="main flex-col opacity-95 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">
      <div className="body flex items-center justify-center min-h-screen">
        <div className="Right flex flex-col my-20 p-10 border rounded-md bg-slate-200  bg-opacity-60">
          <div className="left mx-10">
            <img src={logo} className="mx-11 my-11 rounded-full h-36 w-36" alt="Logo" />
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col'>
            {/* Email input */}
            <input
              type="email"
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
