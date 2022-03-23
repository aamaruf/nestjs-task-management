export interface Task {
  id: string;
  title: string;
  description: string;
  status: taskStatus;
}
export enum taskStatus {
  Pending = 'Pending',
  In_Progress = 'In_Progress',
  Complete = 'Complete',
}
