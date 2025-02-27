// src/layouts/DashboardLayout.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DashboardLayout = ({ children, title = "Fit4U | Dashboard" }) => {
  return (
    <div style={dashboardContainer}>
      <Head>
        <title>{title}</title>
      </Head>
      <aside style={sidebarStyle}>
        <nav>
          <ul style={sidebarListStyle}>
            <li style={sidebarItemStyle}>
              <Link href="/dashboard">Dashboard Home</Link>
            </li>
            <li style={sidebarItemStyle}>
              <Link href="/dashboard/products">Products</Link>
            </li>
            <li style={sidebarItemStyle}>
              <Link href="/dashboard/orders">Orders</Link>
            </li>
            <li style={sidebarItemStyle}>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div style={contentStyle}>
        <header style={dashboardHeaderStyle}>
          <h1>Dashboard</h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

const dashboardContainer = {
  display: 'flex',
  minHeight: '100vh',
};

const sidebarStyle = {
  width: '240px',
  background: '#f5f5f5',
  padding: '20px',
};

const sidebarListStyle = {
  listStyle: 'none',
  padding: 0,
};

const sidebarItemStyle = {
  marginBottom: '15px',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
};

const dashboardHeaderStyle = {
  marginBottom: '20px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
};

export default DashboardLayout;
