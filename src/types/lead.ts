export interface Lead {
  name: string;
  score: number;
  email: string;
  phone: string;
  priority: 'high' | 'medium' | 'low';
  company?: string;
  industry?: string;
  lastContact?: string;
  engagementLevel?: number;
  conversionLikelihood?: number;
  recommendedActions?: string[];
}