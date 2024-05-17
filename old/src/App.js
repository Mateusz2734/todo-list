import { Routes, Route } from "react-router-dom";

import TasksListPage from "./routes/tasks-list-page.route";
import Navigation from "./routes/navigation.route";
import WelcomePage from "./routes/welcome-page.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<WelcomePage />} />
        <Route path="tasks" element={<TasksListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
