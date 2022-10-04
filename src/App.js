import { Routes, Route } from "react-router-dom";

import TasksListPage from "./routes/tasks-list-page.route";
import Navigation from "./routes/navigation.route";

const App = () => {
  return (
    <Routes>
      <Route route="/" element={<Navigation />}>
        <Route index element={<TasksListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
