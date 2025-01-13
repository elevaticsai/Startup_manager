export interface Phase {
  id: number;
  name: string;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface Metric {
  id: number;
  name: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface Task {
  id: number;
  title: string;
  phase: number;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
}

export interface Alert {
  id: number;
  title: string;
  type: 'info' | 'warning' | 'error';
  message: string;
  timestamp: string;
}