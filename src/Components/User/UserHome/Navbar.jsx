import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">PingU</div>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Chats</a>
        <a href="#" className="hover:text-gray-200">Profile</a>
        <a href="#" className="hover:text-gray-200">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
