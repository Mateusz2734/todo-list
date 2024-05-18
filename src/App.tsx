import { Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" >
          <Route index element={<>Choose</>} />
          <Route path="all" element={<>All</>} />
          <Route path="today" element={<>Today</>} />
          <Route path="in_progress" element={<>In Progress</>} />
          <Route path="done" element={<>Done</>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export type SitemapItem = {
  path: string;
  name: string;
};

export const sitemap: SitemapItem[] = [
  { path: "/", name: "Home" },
  { path: "/settings", name: "Settings" },
  { path: "/tasks", name: "Tasks" },
  { path: "/tasks/all", name: "All" },
  { path: "/tasks/today", name: "Today" },
  { path: "/tasks/in_progress", name: "In progress" },
  { path: "/tasks/done", name: "Done" },
];