import React from 'react';
import { ResponsiveContainer, Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
import { Lead } from '../../types/lead';

interface ConversionFunnelProps {
  leads: Lead[];
}

const ConversionFunnel: React.FC<ConversionFunnelProps> = ({ leads }) => {
  const funnelData = [
    {
      value: leads.length,
      name: 'Total Leads',
      fill: '#3B82F6',
    },
    {
      value: leads.filter(lead => lead.engagementLevel && lead.engagementLevel > 5).length,
      name: 'Engaged',
      fill: '#60A5FA',
    },
    {
      value: leads.filter(lead => lead.score >= 75).length,
      name: 'Qualified',
      fill: '#93C5FD',
    },
    {
      value: leads.filter(lead => lead.priority === 'high').length,
      name: 'High Potential',
      fill: '#BFDBFE',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip />
            <Funnel
              data={funnelData}
              dataKey="value"
              nameKey="name"
              labelLine={true}
            >
              <LabelList position="right" fill="#4B5563" stroke="none" dataKey="name" />
              <LabelList position="right" fill="#4B5563" stroke="none" dataKey="value" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversionFunnel;