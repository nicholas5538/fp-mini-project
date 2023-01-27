import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '../routes/routesConfig';

export const renderWithRouterProvider = (initialEntries: string) => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: [initialEntries],
    });

    return {
        user: userEvent.setup(),
        router: router,
        ...render(<RouterProvider router={router} />),
    };
};

export * from '@testing-library/react';
export { renderWithRouterProvider as setup };
