"use client"
import React, { createContext, useContext } from 'react';
import useAuth from '@/hooks/useAuth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { user, loading } = useAuth();

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
