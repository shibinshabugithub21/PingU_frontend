import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white text-center py-4">
      &copy; {new Date().getFullYear()} PingU. All rights reserved.
    </footer>
  );
};

export default Footer;
