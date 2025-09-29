import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Error from './pages/error';

// Create Authentication Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUser(username);
    setIsLoggedIn(true);
    // Store authentication state
    localStorage.setItem('user', username);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // Clear authentication state
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Error route */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;