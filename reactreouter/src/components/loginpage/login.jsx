
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email || !password) {
            alert('Please enter email and password')
            return
        }

        console.log({
            email,
            password,
            rememberMe
        })

        alert('Login form submitted successfully!')
    }

    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">

            <div className="w-full max-w-6xl grid md:grid-cols-2 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">

                {/* Left Section */}
                <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-orange-600 to-orange-800 relative overflow-hidden">

                    <div className="relative z-10">
                        <Link to="/" className="text-3xl font-bold text-white">
                            Rahul<span className="text-slate-950">.</span>
                        </Link>

                        <div className="mt-24">
                            <h1 className="text-5xl font-bold leading-tight">
                                Welcome Back!
                            </h1>

                            <p className="text-orange-100 text-lg mt-6 leading-8">
                                Sign in to continue your journey.
                                Access your account and explore
                                everything waiting for you.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <p className="text-orange-100 text-sm">
                            Build. Learn. Grow. Repeat.
                        </p>
                    </div>

                    <div className="absolute -bottom-32 -right-24 w-96 h-96 border-[50px] border-white/10 rounded-full" />
                    <div className="absolute top-20 -right-20 w-64 h-64 border-[35px] border-white/10 rounded-full" />

                </div>

                {/* Right Section */}
                <div className="p-7 sm:p-12 md:p-14">

                    <div className="max-w-md mx-auto">

                        <div className="mb-10">
                            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
                                Welcome Back
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                                Login to your account
                            </h2>

                            <p className="text-slate-400 mt-3">
                                Enter your details to access your account.
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-slate-300"
                                    >
                                        Password
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="text-sm text-orange-400 hover:text-orange-300 transition"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-4 py-3.5 pr-14 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-400 transition"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between">

                                <label className="flex items-center gap-3 text-slate-400 text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 accent-orange-500"
                                    />
                                    Remember me
                                </label>

                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 rounded-xl transition duration-300 shadow-lg shadow-orange-600/20"
                            >
                                Sign In →
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 h-px bg-slate-700" />
                            <span className="text-slate-500 text-sm">
                                OR CONTINUE WITH
                            </span>
                            <div className="flex-1 h-px bg-slate-700" />
                        </div>

                        {/* Google Login UI */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-slate-700 hover:bg-slate-800 text-white py-3 rounded-xl transition"
                            onClick={() => alert('Google authentication is not configured yet.')}
                        >
                            <svg viewBox="0 0 48 48" className="w-5 h-5">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.75 7.18l7.73 6C44.43 37.98 46.98 31.9 46.98 24.55z"/>
                                <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 019.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 000 24c0 3.86.93 7.51 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>

                            Continue with Google
                        </button>

                        {/* Register */}
                        <p className="text-center text-slate-400 mt-8 text-sm">
                            Don't have an account?

                            <Link
                                to="/register"
                                className="text-orange-400 font-semibold hover:text-orange-300 ml-1"
                            >
                                Create account
                            </Link>
                        </p>

                        <div className="text-center mt-8">
                            <Link
                                to="/"
                                className="text-slate-500 hover:text-orange-400 text-sm transition"
                            >
                                ← Back to Home
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}
