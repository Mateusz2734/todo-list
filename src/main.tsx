import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter';

import JoyCssBaseline from '@mui/joy/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { extendTheme } from '@mui/joy/styles';
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import App from './App.tsx';

const materialTheme = materialExtendTheme({}, extendTheme());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <JoyCssVarsProvider>
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }} >
          <JoyCssBaseline disableTransitionOnChange />
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MaterialCssVarsProvider>
      </JoyCssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);