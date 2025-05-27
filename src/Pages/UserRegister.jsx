import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.retypePassword) newErrors.retypePassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration data:", formData);
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
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-xl text-indigo-100 max-w-md">
              Join thousands of users who trust us with their journey. Create your account and get started today.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Create an Account 🚀</h2>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@example.com"
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

            {/* Retype Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Retype Password</label>
              <input
                type="password"
                name="retypePassword"
                placeholder="••••••••"
                className={`w-full px-4 py-3 border ${
                  errors.retypePassword ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                value={formData.retypePassword}
                onChange={handleChange}
              />
              {errors.retypePassword && <p className="text-red-500 text-sm mt-1">{errors.retypePassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 mt-6 shadow-lg hover:shadow-xl"
            >
              Register
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
