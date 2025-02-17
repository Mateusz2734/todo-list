import { v4 as uuid } from "uuid";

import { Task, PartialTask, Status, Priority } from "../types";

export function createTask(data: PartialTask): Task {
  return {
    ...data,
    dueDate: data.dueDate?.format("YYYY-MM-DD"),
    priority: data.priority || Priority.NONE,
    status: data.status || Status.TODO,
    id: uuid(),
    createdAt: new Date().valueOf(),
    updatedAt: new Date().valueOf(),
  };
}

export const downloadBackup = (tasks: Task[]) => {
  const blob = new Blob([JSON.stringify(tasks, null, 2)], {
    type: "application/json",
  });
  const href = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = href;
  link.download = "backup.json";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};
