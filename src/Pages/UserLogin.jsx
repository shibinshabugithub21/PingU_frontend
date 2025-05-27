import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login data:', formData);
      // Add your login logic here (API call, etc.)
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Logo Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-white rounded-full"></div>
        </div>

        {/* Logo Container */}
        <div className="flex items-center justify-center w-full z-10 relative">
          <div className="text-center text-white">
            <img
              src="/src/assets/pinulogo.PNG"
              alt="PingU Logo"
              className="w-48 h-48 mx-auto mb-8 object-contain rounded-full border-4 border-white/30 bg-white/10 p-4"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-xl text-indigo-100 max-w-md">
              Sign in to continue your journey with us. We're glad to see you again.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Welcome Back 👋</h2>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;