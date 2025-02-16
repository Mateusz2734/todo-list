import { Routes, Route, Navigate } from 'react-router-dom';

import TasksLayout from './components/TasksLayout';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import AllTasks from './pages/TaskInbox';
import DoneTasks from './pages/TaskDone';
import TodayTasks from './pages/TaskToday';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<TasksLayout />}>
          <Route index element={<Navigate to="/tasks/inbox" />} />
          <Route path="inbox" element={<AllTasks />} />
          <Route path="today" element={<TodayTasks />} />
          <Route path="done" element={<DoneTasks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
