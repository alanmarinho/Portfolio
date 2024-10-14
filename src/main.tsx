import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './main.css';
import './css/extras.css';
import { InfoContext } from '@contexts/info';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from '@screens/error404.tsx';
import Test from '@screens/test.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },
  // {
  //   path: '/test',
  //   element: <Test />,
  // },
  // {
  //   path: '/comments',
  //   element: <Comments />,
  // },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoContext>
      <RouterProvider router={router} />
    </InfoContext>
  </StrictMode>,
);
