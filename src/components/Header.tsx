import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart2, Users, FileText, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Brain className="mr-2" />
          ConvertIQ
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/dashboard" className="flex items-center hover:text-blue-200">
                    <BarChart2 className="mr-1" size={18} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/lead-insights" className="flex items-center hover:text-blue-200">
                    <Users className="mr-1" size={18} />
                    Lead Insights
                  </Link>
                </li>
                <li>
                  <Link to="/business-plan" className="flex items-center hover:text-blue-200">
                    <FileText className="mr-1" size={18} />
                    Business Plan
                  </Link>
                </li>
                <li>
                  <Link to="/performance" className="flex items-center hover:text-blue-200">
                    <BarChart2 className="mr-1" size={18} />
                    Performance
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="flex items-center hover:text-blue-200">
                    <LogOut className="mr-1" size={18} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="flex items-center hover:text-blue-200">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;