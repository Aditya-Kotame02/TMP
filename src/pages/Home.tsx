import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart2, Users, FileText } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to ConvertIQ</h1>
      <p className="text-xl mb-8">
        Harness the power of AI for lead analysis, business planning, and performance tracking.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Brain size={48} />}
          title="AI-Powered Insights"
          description="Analyze leads with advanced machine learning algorithms"
        />
        <FeatureCard
          icon={<BarChart2 size={48} />}
          title="Performance Tracking"
          description="Monitor your conversion rates and ROI in real-time"
        />
        <FeatureCard
          icon={<Users size={48} />}
          title="Lead Management"
          description="Efficiently manage and prioritize your leads"
        />
        <FeatureCard
          icon={<FileText size={48} />}
          title="Business Plan Generator"
          description="Create data-driven business strategies"
        />
      </div>
      <Link
        to="/login"
        className="mt-12 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;