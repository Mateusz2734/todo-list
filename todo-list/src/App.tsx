import { Routes, Route } from 'react-router-dom';
import Settings from './pages/SettingsPage';
import Home from './pages/HomePage';
import Layout from './components/Layout';

export default function JoyOrderDashboardTemplate() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>

  );
}

