import React from 'react';
import { Phase } from '../types';
import { ChevronRight } from 'lucide-react';

interface PhaseCardProps {
  phase: Phase;
  onClick: () => void;
}

const PHASE_COLORS = {
  'not-started': {
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    progress: 'bg-gray-400',
  },
  'in-progress': {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    progress: 'bg-blue-500',
  },
  'completed': {
    bg: 'bg-green-100',
    text: 'text-green-600',
    progress: 'bg-green-500',
  },
};

export default function PhaseCard({ phase, onClick }: PhaseCardProps) {
  const colors = PHASE_COLORS[phase.status];

  return (
    <div 
      onClick={onClick}
      className={`${colors.bg} rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-base md:text-lg font-semibold ${colors.text}`}>
          {phase.name}
        </h3>
        <ChevronRight className={`w-5 h-5 ${colors.text}`} />
      </div>
      <div className="space-y-4">
        <div className="w-full bg-white bg-opacity-50 rounded-full h-2">
          <div 
            className={`${colors.progress} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${phase.progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className={colors.text}>Progress</span>
          <span className={`font-medium ${colors.text}`}>{phase.progress}%</span>
        </div>
      </div>
    </div>
  );
}