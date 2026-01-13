import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Phone, GraduationCap, UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [errors, setErrors] = useState<any>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        qualification: ''
    });

    const validatePassword = (password: string) => {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[@$!%*?&]/.test(password)
        };
        return requirements;
    };

    const passwordRequirements = validatePassword(formData.password);
    const isPasswordValid = Object.values(passwordRequirements).every(Boolean);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setErrors({});
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    // Handle validation errors
                    const errorObj: any = {};
                    data.errors.forEach((err: any) => {
                        errorObj[err.field] = err.message;
                    });
                    setErrors(errorObj);
                } else {
                    throw new Error(data.msg || 'Registration failed');
                }
                return;
            }

            // Store token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 py-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
            >
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/10 p-8 md:p-10 border border-blue-100">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Link to="/" className="inline-block">
                            <img src={logo} alt="AOTMS" className="h-14 w-auto" />
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Create Account</h1>
                        <p className="text-slate-600">Start your journey to IT excellence</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-800">{error}</p>
                        </motion.div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full pl-12 pr-4 py-3 border-2 ${errors.name ? 'border-red-300' : 'border-slate-200'} rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900`}
                                    placeholder="John Doe"
                                />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full pl-12 pr-4 py-3 border-2 ${errors.email ? 'border-red-300' : 'border-slate-200'} rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className={`w-full pl-12 pr-4 py-3 border-2 ${errors.phone ? 'border-red-300' : 'border-slate-200'} rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900`}
                                    placeholder="9876543210"
                                />
                            </div>
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>

                        {/* Qualification */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Qualification
                            </label>
                            <div className="relative">
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    value={formData.qualification}
                                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900"
                                    placeholder="B.Tech, MCA, etc."
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className={`w-full pl-12 pr-12 py-3 border-2 ${errors.password ? 'border-red-300' : 'border-slate-200'} rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}

                            {/* Password Requirements */}
                            {formData.password && (
                                <div className="mt-3 p-3 bg-slate-50 rounded-lg space-y-2">
                                    <p className="text-xs font-semibold text-slate-700 mb-2">Password must contain:</p>
                                    <div className="space-y-1">
                                        <PasswordRequirement met={passwordRequirements.length} text="At least 8 characters" />
                                        <PasswordRequirement met={passwordRequirements.uppercase} text="One uppercase letter" />
                                        <PasswordRequirement met={passwordRequirements.lowercase} text="One lowercase letter" />
                                        <PasswordRequirement met={passwordRequirements.number} text="One number" />
                                        <PasswordRequirement met={passwordRequirements.special} text="One special character (@$!%*?&)" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || !isPasswordValid}
                            className="w-full bg-gradient-to-r from-[#0066CC] to-[#003366] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="w-5 h-5" />
                                    Create Account
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-slate-500 font-medium">Already have an account?</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="text-center">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full py-3.5 border-2 border-blue-200 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-sm text-slate-600">
                    By creating an account, you agree to our{' '}
                    <Link to="/terms" className="text-blue-600 hover:underline font-semibold">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:underline font-semibold">
                        Privacy Policy
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

// Password Requirement Component
function PasswordRequirement({ met, text }: { met: boolean; text: string }) {
    return (
        <div className="flex items-center gap-2">
            {met ? (
                <CheckCircle2 className="w-4 h-4 text-green-600" />
            ) : (
                <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
            )}
            <span className={`text-xs ${met ? 'text-green-700 font-medium' : 'text-slate-600'}`}>
                {text}
            </span>
        </div>
    );
}
