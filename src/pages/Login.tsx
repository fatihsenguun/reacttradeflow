import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoT from '../assets/logoTradeFlow.png'
import { InputBox } from '../components/generalComponents/InputBox'
import { GoLock, GoMail, GoArrowRight } from "react-icons/go";

interface LoginResponse {
    data: {
        accessToken: string;
        refreshToken: string;
        role: string;
        firstName: string;
        lastName: string;
    }
}

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setError("");

        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:8080/authenticate", {
                email,
                password
            });

            const data = response.data.data;

            if (data) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('role', data.role);
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);

                navigate('/');
            }
        } catch (err: any) {
            console.error(err);
            setError("Invalid email or password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#0b1120] flex items-center justify-center relative overflow-hidden">

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md p-8 m-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative z-10">

                <div className="flex flex-col items-center mb-10">

                    <img className="w-full h-10 object-contain" src={LogoT} alt="TradeFlow Logo" />

                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-slate-400 text-sm text-center">Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <GoMail className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-slate-200 placeholder-slate-600 transition-all"

                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300 ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <GoLock className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-slate-200 placeholder-slate-600 transition-all"

                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                Sign In
                                <GoArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-4 text-sm">
                    <p className="text-slate-400">
                        Don't have an account?{' '}
                        <button onClick={() => navigate('/register')} className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            Contact Admin
                        </button>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Login