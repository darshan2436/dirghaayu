import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regex for password validation (minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, 1 special character)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate email and password
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.');
      return;
    }

    // If everything is valid, proceed with form submission
    console.log('Form submitted successfully');
  };

  return (
    <div className="main flex-col opacity-90">
      <div className="body flex items-center justify-center min-h-screen">
        <div className="Right flex flex-col my-20 p-10 border rounded-md bg-slate-200  bg-opacity-60">
          <div className="left mx-10">
            <img src="image/logo.jpg" className="mx-10 my-11 rounded-2xl h-36" alt="Logo" />
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
              Log In
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
