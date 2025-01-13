import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import TaskList from '../components/TaskList';
import AlertsList from '../components/AlertsList';
import ProgressChart from '../components/ProgressChart';
import PhaseCard from '../components/PhaseCard';
import PhaseDetails from '../components/PhaseDetails';
import { metrics, tasks, alerts, phases } from '../data';
import { Menu } from 'lucide-react';

export default function Dashboard() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handlePhaseClick = (phaseId: number) => {
    setSelectedPhase(phaseId);
  };

  const handleClosePhaseDetails = () => {
    setSelectedPhase(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-20">
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-white shadow-sm"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Sidebar with mobile support */}
      <div
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          fixed top-0 left-0 h-full z-10
        `}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="lg:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-gray-500">
              Track your startup's progress across all phases
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          <div className="mb-8">
            <ProgressChart phases={phases} />
          </div>

          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Startup Phases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {phases.map((phase) => (
                <PhaseCard
                  key={phase.id}
                  phase={phase}
                  onClick={() => handlePhaseClick(phase.id)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <TaskList tasks={tasks} />
            <AlertsList alerts={alerts} />
          </div>
        </div>
      </main>

      {selectedPhase !== null && (
        <PhaseDetails
          phase={phases.find((p) => p.id === selectedPhase)!}
          onClose={handleClosePhaseDetails}
          tasks={tasks}
          alerts={alerts}
        />
      )}
    </div>
  );
}