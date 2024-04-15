import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
)
