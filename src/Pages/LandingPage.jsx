import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-10 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-white rounded-full"></div>
        </div>

        {/* Logo and Title */}
        <div className="mb-8">
          <img
            src="/src/assets/pinulogo.PNG"
            alt="PingU Logo"
            className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-indigo-200 bg-white p-2"
          />
          <h1 className="text-4xl font-bold text-indigo-700">Welcome to PingU 🚀</h1>
          <p className="mt-4 text-gray-600 text-lg">
            PingU is your all-in-one chat solution. Stay connected, share moments, and communicate seamlessly across
            devices.
          </p>
          <p className="mt-6 text-indigo-500 text-sm font-medium">
            Redirecting to login in <span className="font-bold">{seconds}</span> second{seconds !== 1 ? "s" : ""}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
