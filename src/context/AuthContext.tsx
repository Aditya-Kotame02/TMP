import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock login function for demonstration
const mockLogin = async (email: string, password: string): Promise<{ user: User; token: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'demo@example.com' && password === 'password') {
    return {
      user: { id: '1', email: 'demo@example.com', name: 'Demo User' },
      token: 'mock-jwt-token'
    };
  }
  throw new Error('Invalid credentials');
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const { user, token } = await mockLogin(email, password);
      setUser(user);
      localStorage.setItem('token', token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};