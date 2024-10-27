import React from 'react';
import { Users, Star, Mail, Phone } from 'lucide-react';
import { Lead } from '../../types/lead';

interface LeadTableProps {
  leads: Lead[];
}

const LeadTable: React.FC<LeadTableProps> = ({ leads }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead, index) => (
            <tr key={index} className={lead.priority === 'high' ? 'bg-blue-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Users className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                    <div className="text-sm text-gray-500">{lead.company}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Star className={`flex-shrink-0 h-5 w-5 ${
                    lead.score >= 85 ? 'text-yellow-400' : 'text-gray-400'
                  }`} />
                  <div className="ml-2 text-sm text-gray-900">{lead.score}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  lead.priority === 'high' 
                    ? 'bg-green-100 text-green-800'
                    : lead.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {lead.priority.charAt(0).toUpperCase() + lead.priority.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Mail className="flex-shrink-0 h-5 w-5 text-gray-400" />
                  <div className="ml-2 text-sm text-gray-900">{lead.email}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Phone className="flex-shrink-0 h-5 w-5 text-gray-400" />
                  <div className="ml-2 text-sm text-gray-900">{lead.phone}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;