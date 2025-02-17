import z from "zod";
import { Dayjs } from "dayjs";
import { ColorPaletteProp } from "@mui/joy";

export type SitemapItem = {
  path: string;
  name: string;
};

export enum Status {
  TODO = "todo",
  DONE = "done",
}

export enum Priority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
  NONE = "none",
}

export type PriorityColor = {
  name: string;
  htmlColor: string;
  color: ColorPaletteProp;
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

const PrioritySchema = z.nativeEnum(Priority);
const StatusSchema = z.nativeEnum(Status);

const TaskSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
  description: z.string().optional(),
  dueDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "dueDate must be in the format YYYY-MM-DD")
    .optional(),
  priority: PrioritySchema,
  status: StatusSchema,
  tags: z.array(z.string()).optional(),
});

export const TaskOrTasksSchema = z
  .union([TaskSchema, z.array(TaskSchema)])
  .transform((data) => (Array.isArray(data) ? data : [data]));
