import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import App from './App'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/',
        element: <Home /> 
      },
      { path: '/about',
        element: <About /> 
      },
      { path: '/contact',
        element: <Contact /> 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
