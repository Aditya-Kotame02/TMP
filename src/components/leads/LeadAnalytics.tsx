import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Lead } from '../../types/lead';

interface LeadAnalyticsProps {
  leads: Lead[];
}

const LeadAnalytics: React.FC<LeadAnalyticsProps> = ({ leads }) => {
  const priorityData = leads.reduce((acc, lead) => {
    const priority = lead.priority;
    acc[priority] = (acc[priority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(priorityData).map(([priority, count]) => ({
    priority: priority.charAt(0).toUpperCase() + priority.slice(1),
    count,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Lead Analytics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="priority" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3B82F6" name="Number of Leads" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadAnalytics;