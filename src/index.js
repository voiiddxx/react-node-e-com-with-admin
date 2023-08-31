import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './Context/Appcontext';
import { AdminProvider } from './Context/Admincontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <AdminProvider>
    <App />
    </AdminProvider>
    </AppProvider>

);
