import React from 'react';
import { phases } from '../data';
import { Menu, Home, Bell, X } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Menu className="w-6 h-6" />
          <span className="font-semibold text-lg">Startup Progress</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden">
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        )}
      </div>
      
      <div className="p-4">
        <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white mb-6">
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
        
        <div className="space-y-2">
          <div className="text-xs uppercase text-gray-500 font-semibold mb-2">Phases</div>
          {phases.map((phase) => (
            <a
              key={phase.id}
              href={`#phase-${phase.id}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white"
            >
              <span className="text-sm">{phase.name}</span>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500' :
                  phase.status === 'in-progress' ? 'bg-blue-500' :
                  'bg-gray-500'
                }`} />
                <span className="text-xs">{phase.progress}%</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
        </a>
      </div>
    </div>
  );
}