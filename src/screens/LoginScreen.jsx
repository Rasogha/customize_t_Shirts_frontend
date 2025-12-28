import { useState, useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import { FaSignInAlt } from "react-icons/fa"

const LoginScreen = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Login logic here');
    // We will connect this to the backend API later
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-brandBlack text-white">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
            
            {/* Header */}
            <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide">
                Welcome <span className="text-brandLightGreen">Back</span>
            </h1>
            <p className="mt-2 text-sm text-gray-400">Sign in to access your designs</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={submitHandler}>
            <div>
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white placeholder-gray-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300">Password</label>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brandGreen focus:outline-none text-white placeholder-gray-500"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 bg-brandGreen hover:bg-brandLightGreen text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 flex justify-center items-center gap-2"
            >
                <FaSignInAlt /> Sign In
            </button>
            </form>

            {/* The Link to Register */}
            <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
                New Customer?{' '}
                <Link to="/register" className="font-bold text-brandLightGreen hover:text-white transition underline">
                Register Here
                </Link>
            </p>
            </div>
        </div>
        </div>
    )
}

export default LoginScreen;
