// src/layouts/AuthLayout.js

import React from 'react';
import Head from 'next/head';

const AuthLayout = ({ children, title = "Fit4U | Authentication" }) => {
  return (
    <div style={containerStyle}>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={cardStyle}>
        {children}
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f4f4f4',
};

const cardStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '30px',
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

export default AuthLayout;
