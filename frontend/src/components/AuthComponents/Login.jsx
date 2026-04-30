import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdMovie } from "react-icons/md";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

import MyContext from "../../context/MyContext";
import baseUrl from "../../utils/baseUrl";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
    const myState = useContext(MyContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        try {
            const api = await axios.post(`${baseUrl}/user/login`, formData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            myState.setToast(true);
            myState.setToastMessage(api.data?.message || "Welcome back!");
            myState.setIsAuthenticated(true);
            setTimeout(() => navigate("/profile"), 1000);
        } catch (error) {
            myState.setToast(true);
            myState.setToastMessage(error?.response?.data?.message || "Invalid credentials. Please try again.");
            myState.setIsAuthenticated(false);
        }
    };

    return (
        <div className="min-h-screen bg-leanBlue flex items-center justify-center px-4 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md relative">
                <div className="bg-deepBlue rounded-2xl p-8 shadow-2xl border border-white/10">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <MdMovie className="text-black text-2xl" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                            <p className="text-waikawaGrey text-sm mt-1">Sign in to CineVerse</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-white/70 text-sm font-medium">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-waikawaGrey text-sm" />
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="tanishk@gmail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-9 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 transition-all duration-200 text-sm"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-white/70 text-sm font-medium">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-waikawaGrey text-sm" />
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-9 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 transition-all duration-200 text-sm"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-xs">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-cyan-500/20"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <FiArrowRight />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center text-waikawaGrey text-sm mt-6">
                        Do Nott have an account?{" "}
                        <Link
                            to="/profile/register"
                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;