import { Phase, Metric, Task, Alert } from './types';

export const phases: Phase[] = [
  {
    id: 1,
    name: 'Idea Validation & Market Research',
    progress: 85,
    status: 'in-progress',
  },
  {
    id: 2,
    name: 'Building MVP',
    progress: 60,
    status: 'in-progress',
  },
  {
    id: 3,
    name: 'Business Model & Financials',
    progress: 40,
    status: 'in-progress',
  },
  {
    id: 4,
    name: 'Pitch Deck & Storytelling',
    progress: 20,
    status: 'not-started',
  },
  {
    id: 5,
    name: 'Investor Outreach & Fundraising',
    progress: 0,
    status: 'not-started',
  },
  {
    id: 6,
    name: 'Post-Funding & Growth',
    progress: 0,
    status: 'not-started',
  },
];

export const metrics: Metric[] = [
  {
    id: 1,
    name: 'User Feedback Score',
    value: 4.8,
    change: 0.3,
    icon: 'star',
  },
  {
    id: 2,
    name: 'MVP Completion',
    value: '60%',
    change: 5,
    icon: 'code',
  },
  {
    id: 3,
    name: 'Funding Raised',
    value: '$150K',
    change: 15000,
    icon: 'trending-up',
  },
  {
    id: 4,
    name: 'Customer Interviews',
    value: 45,
    change: 3,
    icon: 'users',
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Complete competitor analysis report',
    phase: 1,
    status: 'pending',
    dueDate: '2024-03-25',
  },
  {
    id: 2,
    title: 'Implement payment integration in MVP',
    phase: 2,
    status: 'in-progress',
    dueDate: '2024-03-28',
  },
  {
    id: 3,
    title: 'Update financial projections',
    phase: 3,
    status: 'pending',
    dueDate: '2024-03-30',
  },
  {
    id: 4,
    title: 'Practice pitch presentation',
    phase: 4,
    status: 'pending',
    dueDate: '2024-04-02',
  },
];

export const alerts: Alert[] = [
  {
    id: 1,
    title: 'MVP Testing Deadline',
    type: 'warning',
    message: 'MVP testing phase ends in 3 days',
    timestamp: '2024-03-22T10:00:00Z',
  },
  {
    id: 2,
    title: 'New Investor Interest',
    type: 'info',
    message: 'Venture Capital firm XYZ requested a meeting',
    timestamp: '2024-03-22T09:30:00Z',
  },
  {
    id: 3,
    title: 'Customer Feedback Alert',
    type: 'error',
    message: 'Critical bug reported in payment flow',
    timestamp: '2024-03-22T08:45:00Z',
  },
];