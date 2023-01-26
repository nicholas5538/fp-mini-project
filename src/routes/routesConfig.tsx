import React from 'react';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ErrorBoundary from './error';
import Root from './root';
import Dashboard from './dashboard';
import Departments from './departments';
import Employees from './employees';

export const routesConfig = createRoutesFromElements(
    <Route path='/' errorElement={<ErrorBoundary />} element={<Root />}>
        <Route errorElement={<ErrorBoundary />}>
            <Route index element={<Dashboard />} />
            <Route path='departments' element={<Departments />} />
            <Route path='employees' element={<Employees />} />
            <Route path='locations' element={<Dashboard />} />
            <Route path='projects' element={<Dashboard />} />
            <Route path='settings' element={<ErrorBoundary />} />
        </Route>
    </Route>
);
