import React, { useState, useCallback } from 'react';
import FileUpload from '../components/leads/FileUpload';
import LeadTable from '../components/leads/LeadTable';
import LeadAnalytics from '../components/leads/LeadAnalytics';
import LeadOverview from '../components/leads/LeadOverview';
import ConversionFunnel from '../components/leads/ConversionFunnel';
import LeadFilters from '../components/leads/LeadFilters';
import { Lead } from '../types/lead';
import { Download } from 'lucide-react';

const LeadInsights: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.name.split('.').pop()?.toLowerCase();
    if (!['csv', 'xlsx', 'json'].includes(fileType || '')) {
      setError('Please upload a CSV, XLSX, or JSON file');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Mock processing for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data with enhanced lead information
      const processedLeads: Lead[] = [
        { 
          name: 'John Smith',
          score: 95,
          email: 'john@company.com',
          phone: '+1 234 567 8901',
          priority: 'high',
          company: 'Tech Corp',
          industry: 'Technology',
          engagementLevel: 9,
          conversionLikelihood: 0.85,
          recommendedActions: ['Schedule demo', 'Send pricing proposal']
        },
        { 
          name: 'Sarah Johnson',
          score: 88,
          email: 'sarah@business.com',
          phone: '+1 234 567 8902',
          priority: 'high',
          company: 'Business Solutions',
          industry: 'Consulting',
          engagementLevel: 8,
          conversionLikelihood: 0.75,
          recommendedActions: ['Follow up call', 'Share case studies']
        },
        { 
          name: 'Mike Wilson',
          score: 75,
          email: 'mike@example.com',
          phone: '+1 234 567 8903',
          priority: 'medium',
          company: 'Growth Inc',
          industry: 'Marketing',
          engagementLevel: 6,
          conversionLikelihood: 0.55,
          recommendedActions: ['Send nurture emails', 'Connect on LinkedIn']
        },
      ];

      setLeads(processedLeads);
      setFilteredLeads(processedLeads);
    } catch (err) {
      setError('Error processing file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, []);

  const handleFilterChange = useCallback(({ priority, industry, minScore }) => {
    const filtered = leads.filter(lead => {
      const priorityMatch = priority === 'all' || lead.priority === priority;
      const industryMatch = industry === 'all' || lead.industry === industry;
      const scoreMatch = lead.score >= minScore;
      return priorityMatch && industryMatch && scoreMatch;
    });
    setFilteredLeads(filtered);
  }, [leads]);

  const handleExport = useCallback(() => {
    const jsonString = JSON.stringify(filteredLeads, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [filteredLeads]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lead Insights</h1>
        {leads.length > 0 && (
          <button
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            <Download className="mr-2" size={18} />
            Export Data
          </button>
        )}
      </div>
      
      <FileUpload
        isUploading={isUploading}
        error={error}
        onFileUpload={handleFileUpload}
      />

      {leads.length > 0 && (
        <>
          <LeadOverview leads={leads} />
          <LeadFilters onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <LeadAnalytics leads={filteredLeads} />
            <ConversionFunnel leads={filteredLeads} />
          </div>
          <LeadTable leads={filteredLeads} />
        </>
      )}
    </div>
  );
};

export default LeadInsights;