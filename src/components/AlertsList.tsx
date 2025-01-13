import React from 'react';
import { Alert } from '../types';
import { Info, AlertTriangle, AlertOctagon } from 'lucide-react';

interface AlertsListProps {
  alerts: Alert[];
}

export default function AlertsList({ alerts }: AlertsListProps) {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertOctagon className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Recent Alerts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-6">
            <div className="flex items-start space-x-4">
              {getAlertIcon(alert.type)}
              <div>
                <h3 className="font-medium">{alert.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{alert.message}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(alert.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}