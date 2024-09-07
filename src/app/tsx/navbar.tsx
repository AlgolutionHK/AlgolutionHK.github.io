"use client";

import React, { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
import '../css/navbar.css';
import Logo from '../../../public/logo.png';
import '../css/w3.css';

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({
    children,
}: Readonly<{
      children: React.ReactNode;
    }>) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownStyle = {
    display: showDropdown ? 'block' : 'none',
    backgroundColor: '#DBF0FF',
    color: '#000',
    position: 'absolute' as const,
    top: '100%',
    left: '0',
    width: '100%',
    boxShadow: '0 0 2rem rgba(0, 0, 0, 0.3)',
    zIndex: '2',
  };

  const dropdownItemStyle = {
    backgroundColor: 'DBF0FF',
    padding: '1rem',
    borderBottom: '1px solid #000',
    cursor: 'pointer',
    transition: 'background-color 1s ease',
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <Link href="/">
          <Image className="navbar-logo" src={Logo} alt='iconImage'/>
        </Link>
        <ul className="navbar__menu w3-hide-small" style={{ display: 'flex', listStyle: 'none', margin: '0' }}>
          <li className="navbar-item">
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/strategies/indices" className="navbar-link">
              Features
            </Link>
          </li>
          <li className="navbar-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} style={{ position: 'relative'}}>
          {/* <li className="navbar-item" style={{ position: 'relative'}}> */}
            <span className="navbar-link" style={{ cursor: 'pointer' }}>
              Strategies
            </span>
            <div style={dropdownStyle}>
              <div style={dropdownItemStyle}>
            {/* <div>
              <div> */}
                <Link href="/strategies/indices" className="navbar-link dropdown-item">
                  Stock Filter
                </Link>
              </div>
              <div style={dropdownItemStyle}>
              {/* <div> */}
                <Link href="/strategies/forex" className="navbar-link dropdown-item">
                  Fully Automated Trading
                </Link>
              </div>
              <div style={dropdownItemStyle}>
              {/* <div> */}
                <Link href="/strategies/crypto" className="navbar-link dropdown-item">
                  MT5 Robots
                </Link>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link href="/pricing" className="navbar-link">
              Pricing
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" className="navbar-link">
              Contact Us
            </Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer className="bottom-bar">
        <p style={{ margin: '0', fontSize: '1.2rem' }}>© Algolution 2024&nbsp;&nbsp;&nbsp;</p>
        <p style={{ margin: '0', fontSize: '1.2rem', marginLeft: '1rem' }}>
          <a href="https://linktr.ee/algolutionhk" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}