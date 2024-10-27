import React, { useState } from 'react';
import { FileText, Send } from 'lucide-react';

const BusinessPlanGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [strategies, setStrategies] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to generate business plan
    setGeneratedPlan(`Generated business plan for ${businessType} targeting ${targetAudience} with strategies: ${strategies}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Business Plan Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Input Parameters</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="businessType" className="block text-gray-700 font-bold mb-2">
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="targetAudience" className="block text-gray-700 font-bold mb-2">
                Target Audience
              </label>
              <input
                type="text"
                id="targetAudience"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="strategies" className="block text-gray-700 font-bold mb-2">
                Key Strategies
              </label>
              <textarea
                id="strategies"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
                value={strategies}
                onChange={(e) => setStrategies(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Send className="mr-2" size={18} />
              Generate Plan
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Generated Business Plan</h2>
          {generatedPlan ? (
            <div className="bg-gray-100 p-4 rounded-md">
              <FileText className="text-blue-600 mb-2" size={24} />
              <p className="text-gray-700">{generatedPlan}</p>
            </div>
          ) : (
            <p className="text-gray-600">Your generated business plan will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanGenerator;