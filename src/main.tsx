import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './main.css';
import './css/extras.css';
import { InfoContext } from '@contexts/info';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoContext>
      <App />
    </InfoContext>
  </StrictMode>,
);
