import React from 'react';
import { Task } from '../types';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Tasks & Action Items</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <div key={task.id} className="p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {getStatusIcon(task.status)}
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-gray-500">Due {new Date(task.dueDate).toLocaleDateString()}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
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
  );
}