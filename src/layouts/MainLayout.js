// src/layouts/MainLayout.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MainLayout = ({ children, title = "Fit4U" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Fit4U - Clothes Personalization" />
      </Head>
      <header style={headerStyle}>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link href="/">Home</Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/products">Products</Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/about">About</Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={mainStyle}>
        {children}
      </main>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Fit4U. All rights reserved.</p>
      </footer>
    </div>
  );
};

const headerStyle = {
  background: '#333',
  padding: '10px 20px',
};

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  marginRight: '20px',
  color: '#fff',
};

const mainStyle = {
  minHeight: '80vh',
  padding: '20px',
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

export default MainLayout;
