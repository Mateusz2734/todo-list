import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Task } from '../types';

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
  filterTasks: (predicate: (todo: Task) => boolean) => Task[];
  editTask: (id: string, task: Task) => void;
  getCountWithFilter: (predicate: (todo: Task) => boolean) => number;
}

const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
      toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, status: "done" } : task
        ),
      })),
      filterTasks: (predicate) => {
        const todos = get().tasks;
        return todos.filter(predicate);
      },
      editTask: (id, task) => set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? task : t)),
      })),
      getCountWithFilter: (predicate) => {
        const todos = get().tasks;
        return todos.filter(predicate).length;
      },
    }),

    {
      name: 'tasks',
    },
  )
);

export default useTaskStore;