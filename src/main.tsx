import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { DataContext } from './context/data.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <DataContext>
      <App />
    </DataContext>
  </BrowserRouter >
);
