import { Dayjs } from "dayjs";

export type SitemapItem = {
  path: string;
  name: string;
};

export type Status = 'todo' | 'in_progress' | 'done';

export type Priority = "high" | "medium" | "low" | "none";

export type PriorityColor = {
  name: string;
  color: string;
  priority: Priority;
};

export type PartialTask = {
  name: string;
  description?: string;
  dueDate?: Dayjs;
  priority?: Priority;
  status?: Status;
  tags?: string[];
};

export type Task = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  description?: string;
  dueDate?: string;
  priority: Priority;
  status: Status;
  tags?: string[];
};