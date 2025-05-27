import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
    } else {
      console.log("OTP entered:", otp);
      // Proceed with OTP verification
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Logo Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-white rounded-full"></div>
        </div>

        <div className="flex items-center justify-center w-full z-10 relative">
          <div className="text-center text-white">
            <img
              src="/src/assets/pinulogo.PNG"
              alt="PingU Logo"
              className="w-48 h-48 mx-auto mb-8 object-contain rounded-full border-4 border-white/30 bg-white/10 p-4"
            />
            <h1 className="text-4xl font-bold mb-4">OTP Verification</h1>
            <p className="text-xl text-indigo-100 max-w-md">
              We’ve sent a 6-digit OTP to your email/phone. Please enter it to verify your identity.
            </p>
          </div>
        </div>
      </div>

      {/* OTP Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Enter OTP 🔐</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">6-digit OTP</label>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={handleChange}
                maxLength={6}
                placeholder="Enter OTP"
                className={`w-full px-4 py-3 border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-center text-lg tracking-widest`}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 mt-6 shadow-lg hover:shadow-xl"
            >
              Verify OTP
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Didn’t receive the code?{" "}
            <button
              className="text-indigo-600 hover:underline font-medium"
              onClick={() => console.log("Resend OTP")}
            >
              Resend
            </button>
          </p>

          <p className="mt-4 text-center text-sm text-gray-600">
            Go back to{" "}
            <Link to="/login" className="text-indigo-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Otp;
