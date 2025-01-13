import React from 'react';
import { Phase, Task, Alert } from '../types';
import { X, ChevronLeft, FileText, Bell, CheckSquare } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PhaseDetailsProps {
  phase: Phase;
  onClose: () => void;
  tasks: Task[];
  alerts: Alert[];
}

export default function PhaseDetails({ phase, onClose, tasks, alerts }: PhaseDetailsProps) {
  const phaseTasks = tasks.filter(task => task.phase === phase.id);
  const phaseAlerts = alerts.filter(alert => alert.title.includes(phase.name));

  // Sample data for the chart - in a real app, this would come from your data source
  const chartData = [
    { name: 'Week 1', progress: 20 },
    { name: 'Week 2', progress: 40 },
    { name: 'Week 3', progress: 55 },
    { name: 'Week 4', progress: phase.progress },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{phase.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>
              <span className="font-medium text-gray-900">{phase.progress}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                Progress Overview
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="progress" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-blue-500" />
                Recent Alerts
              </h3>
              <div className="space-y-4">
                {phaseAlerts.map(alert => (
                  <div 
                    key={alert.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{alert.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{alert.message}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.type === 'error' ? 'bg-red-100 text-red-800' :
                        alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <CheckSquare className="w-5 h-5 mr-2 text-blue-500" />
              Tasks & Action Items
            </h3>
            <div className="space-y-4">
              {phaseTasks.map(task => (
                <div 
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}