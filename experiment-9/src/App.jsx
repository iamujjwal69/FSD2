import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import RoleRoute from './components/RoleRoute';
import Login from './routes/Login';
import UserDashboard from './routes/UserDashboard';
import AdminDashboard from './routes/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid p-0">
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            
            {/* User Access Only */}
            <Route element={<RoleRoute requiredRole="USER" />}>
              <Route path="/user" element={<UserDashboard />} />
            </Route>
            
            {/* Admin Access Only */}
            <Route element={<RoleRoute requiredRole="ADMIN" />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            
          </Route>

          {/* Default Redirects */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
