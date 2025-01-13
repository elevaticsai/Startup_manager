import React from 'react';
import { Metric } from '../types';
import { Star, Code, TrendingUp, Users } from 'lucide-react';

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <Star className="w-6 h-6 text-blue-500" />;
      case 'code':
        return <Code className="w-6 h-6 text-blue-500" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-blue-500" />;
      case 'users':
        return <Users className="w-6 h-6 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{metric.name}</p>
          <h3 className="text-2xl font-bold">{metric.value}</h3>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          {getIcon(metric.icon)}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {metric.change >= 0 ? '+' : ''}{metric.change}
        </span>
        <span className="text-gray-500 text-sm ml-1">vs last week</span>
      </div>
    </div>
  );
}