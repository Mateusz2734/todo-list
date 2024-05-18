export type SitemapItem = {
  path: string;
  name: string;
};

export type Status = 'todo' | 'in_progress' | 'done';

export type Priority = "high" | "medium" | "low" | "none";

export type Task = {
  name: string;
  description?: string;
  due_date?: string;
  priority: Priority;
  status: Status;
};