import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage(null);
      console.log('Register logic here');
      // Connect to backend API later
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-brandBlack text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            Join <span className="text-brandLightGreen">Us</span>
          </h1>
          <p className="mt-2 text-sm text-gray-400">Create an account to start designing</p>
        </div>

        {message && <div className="bg-red-900/50 text-red-200 p-3 rounded text-sm text-center border border-red-800">{message}</div>}

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <input type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white" />
          </div>

          <button type="submit" className="w-full py-3 px-4 bg-brandGreen hover:bg-brandLightGreen text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 flex justify-center items-center gap-2">
            <FaUserPlus /> Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-brandLightGreen hover:text-white transition underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;