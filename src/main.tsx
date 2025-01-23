import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './main.css';
import './css/extras.css';
import { InfoContext } from '@contexts/info';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from '@screens/error404.tsx';

createRoot(document.getElementById('root')!).render(
  <InfoContext>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </InfoContext>,
);
