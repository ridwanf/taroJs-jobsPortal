export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company?: string;
  requirements?: string[];
  isApplied: boolean;
}

export interface Proposal {
  jobId: number;
  content: string;
  status?: 'draft' | 'submitted';
}

export interface User {
  id: number;
  name: string;
  skills: string[];
  cvUrl?: string;
  credits: number;
  avatar?: string;
}