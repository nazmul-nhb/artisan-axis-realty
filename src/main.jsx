import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes';
import EstateProvider from './providers/EstateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <EstateProvider>
        <RouterProvider router={router} />
      </EstateProvider>
    </AuthProvider>
  </React.StrictMode>
)
