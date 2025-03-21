import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,

  },
  {
    path: "/login",
    element: <LogInPage/>
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  }
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} /> 
)
