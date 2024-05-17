import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/inter';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
