import { v4 as uuid } from 'uuid';

import { Task, PartialTask } from './types';

export function createTask(data: PartialTask): Task {
  return {
    ...data,
    dueDate: data.dueDate?.format('YYYY-MM-DD'),
    priority: data.priority || 'none',
    status: data.status || 'todo',
    id: uuid(),
    createdAt: new Date().valueOf(),
    updatedAt: new Date().valueOf(),
  };
}