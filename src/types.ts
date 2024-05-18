export type SitemapItem = {
  path: string;
  name: string;
};

export type Status = 'todo' | 'in_progress' | 'done';

export type Priority = "high" | "medium" | "low" | "none";

export type Task = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
  dueDate?: string;
  priority: Priority;
  status: Status;
  tags?: string[];
};