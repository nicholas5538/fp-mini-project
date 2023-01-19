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
import './index.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            errorElement={<ErrorBoundary />}
            element={<Root />}
        ></Route>
    )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
