import React from 'react';
import { Users, TrendingUp, Building, Clock } from 'lucide-react';
import { Lead } from '../../types/lead';

interface LeadOverviewProps {
  leads: Lead[];
}

const LeadOverview: React.FC<LeadOverviewProps> = ({ leads }) => {
  const metrics = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      label: 'Total Leads',
      value: leads.length,
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      label: 'High Priority',
      value: leads.filter(lead => lead.priority === 'high').length,
    },
    {
      icon: <Building className="h-6 w-6 text-purple-600" />,
      label: 'Industries',
      value: new Set(leads.map(lead => lead.industry)).size,
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      label: 'Avg Score',
      value: `${Math.round(leads.reduce((acc, lead) => acc + lead.score, 0) / leads.length)}%`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
            </div>
            <div className="bg-gray-50 rounded-full p-3">{metric.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadOverview;