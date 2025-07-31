import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Anand Ganta. "All is well."</p>
    </footer>
  );
};

export default Footer;
