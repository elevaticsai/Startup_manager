import React from 'react';
import { Phase } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ProgressChartProps {
  phases: Phase[];
}

export default function ProgressChart({ phases }: ProgressChartProps) {
  const COLORS = {
    'not-started': '#E5E7EB',
    'in-progress': '#60A5FA',
    'completed': '#34D399'
  };

  // Transform phases data for the donut chart
  const data = phases.map(phase => ({
    name: phase.name,
    value: phase.progress,
    status: phase.status
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p className="text-gray-600">{`Progress: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Phase Progress Overview</h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.status]} 
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {Object.entries(COLORS).map(([status, color]) => (
          <div key={status} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-gray-600 capitalize">
              {status.replace('-', ' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}