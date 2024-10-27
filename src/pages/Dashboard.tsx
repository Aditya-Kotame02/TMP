import React from 'react';
import { BarChart2, Users, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const metrics = [
    { icon: <Users size={24} />, label: 'Total Leads', value: '1,234' },
    { icon: <TrendingUp size={24} />, label: 'Conversion Rate', value: '15.8%' },
    { icon: <DollarSign size={24} />, label: 'Revenue', value: '$45,678' },
    { icon: <BarChart2 size={24} />, label: 'Engagement Score', value: '7.9' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-blue-600 mr-4">{metric.icon}</div>
              <h3 className="text-lg font-semibold">{metric.label}</h3>
            </div>
            <p className="text-3xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* TODO: Implement recent activity chart or list */}
        <p className="text-gray-600">Chart or list of recent activities will be displayed here.</p>
      </div>
    </div>
  );
};

export default Dashboard;