import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const PerformanceTracking: React.FC = () => {
  // Mock data for demonstration
  const performanceData = [
    { month: 'Jan', conversionRate: 12, revenue: 35000 },
    { month: 'Feb', conversionRate: 15, revenue: 42000 },
    { month: 'Mar', conversionRate: 18, revenue: 50000 },
    { month: 'Apr', conversionRate: 16, revenue: 45000 },
    { month: 'May', conversionRate: 20, revenue: 55000 },
    { month: 'Jun', conversionRate: 22, revenue: 60000 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Performance Tracking</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Conversion Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversionRate" fill="#3B82F6" name="Conversion Rate (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Performance Summary</h2>
        <div className="flex items-center text-green-600">
          <TrendingUp className="mr-2" size={24} />
          <span className="text-lg font-semibold">Overall Positive Trend</span>
        </div>
        <p className="mt-2 text-gray-600">
          Your conversion rate and revenue have shown consistent growth over the past 6 months.
          Continue to monitor these metrics and adjust your strategies accordingly.
        </p>
      </div>
    </div>
  );
};

export default PerformanceTracking;