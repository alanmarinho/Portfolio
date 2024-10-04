import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './main.css';
import './css/extras.css';
import { InfoContext } from '@contexts/info';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoContext>
      <RouterProvider router={router} />
    </InfoContext>
  </StrictMode>,
);
