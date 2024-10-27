import React from 'react';
import { Filter } from 'lucide-react';

interface LeadFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

interface FilterOptions {
  priority: string;
  industry: string;
  minScore: number;
}

const LeadFilters: React.FC<LeadFiltersProps> = ({ onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      priority: name === 'priority' ? value : 'all',
      industry: name === 'industry' ? value : 'all',
      minScore: name === 'minScore' ? parseInt(value) : 0,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold">Filter Leads</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            name="priority"
            onChange={handleFilterChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
          <select
            name="industry"
            onChange={handleFilterChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Industries</option>
            <option value="technology">Technology</option>
            <option value="consulting">Consulting</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Score</label>
          <input
            type="number"
            name="minScore"
            min="0"
            max="100"
            defaultValue="0"
            onChange={handleFilterChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadFilters;