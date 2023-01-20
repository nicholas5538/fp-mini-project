import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorBoundary from './routes/error';
import Dashboard from './routes/dashboard';
import Departments from './routes/departments';
import Employees from './routes/employees';
import Locations from './routes/locations';
import Projects from './routes/projects';
import Settings from './routes/settings';
import './index.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<ErrorBoundary />} element={<Root />}>
            <Route errorElement={<ErrorBoundary />}>
                <Route index element={<Dashboard />} />
                <Route path='departments' element={<Departments />} />
                <Route path='employees' element={<Employees />} />
                <Route path='locations' element={<Locations />} />
                <Route path='projects' element={<Projects />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
