import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LeadInsights from './pages/LeadInsights';
import BusinessPlanGenerator from './pages/BusinessPlanGenerator';
import PerformanceTracking from './pages/PerformanceTracking';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/lead-insights" element={<PrivateRoute element={<LeadInsights />} />} />
              <Route path="/business-plan" element={<PrivateRoute element={<BusinessPlanGenerator />} />} />
              <Route path="/performance" element={<PrivateRoute element={<PerformanceTracking />} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;