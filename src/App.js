import { Routes, Route } from "react-router-dom";

import ListPage from "./routes/list-page.route";
import Navigation from "./routes/navigation.route";

const App = () => {
  return (
    <Routes>
      <Route route="/" element={<Navigation />}>
        <Route index element={<ListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
