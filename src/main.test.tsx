import { render, screen, waitFor } from './test-utils/testing-library-util';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router-dom';
import { routesConfig } from './routes/routesConfig';

describe('full app navigation', () => {
    test('Click Departments link goes to /departments', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/'],
        });

        render(router);
        await user.click(screen.getByTestId('Company'));
        await user.click(screen.getByRole('link', { name: /departments/i }));
        expect(router.state.location.pathname).toEqual('/departments');
        expect(
            screen.getByRole('heading', {
                name: /sort your employees and group them by departments/i,
            })
        ).toBeInTheDocument();
    });

    test('Click Employees link goes to /employees', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/departments'],
        });

        render(router);
        await user.click(screen.getByTestId('Company'));
        await user.click(screen.getByRole('link', { name: /employees/i }));
        expect(router.state.location.pathname).toEqual('/employees');
        expect(
            screen.getByRole('heading', {
                name: /find any employees, their department and location/i,
            })
        ).toBeInTheDocument();
    });

    test('Click Locations link goes to /locations', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/departments'],
        });

        render(router);
        await user.click(screen.getByTestId('Company'));
        await user.click(screen.getByRole('link', { name: /locations/i }));
        expect(router.state.location.pathname).toEqual('/locations');
    });

    test('Click Projects link goes to /projects', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/'],
        });

        render(router);
        await user.click(screen.getByRole('link', { name: /projects/i }));
        expect(router.state.location.pathname).toEqual('/projects');
    });

    test('Click Settings link goes to /settings', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/projects'],
        });

        render(router);
        await user.click(screen.getByRole('link', { name: /settings/i }));
        expect(router.state.location.pathname).toEqual('/settings');
    });

    test('Click Dashboard link goes back to /', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/settings'],
        });

        render(router);
        await user.click(screen.getByRole('link', { name: /dashboard/i }));
        expect(router.state.location.pathname).toEqual('/');
        expect(
            screen.getByRole('heading', {
                name: /welcome to pepsi's corporate page/i,
            })
        ).toBeInTheDocument();
    });

    test('Landing on an invalid page and navigate back to /', async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/some/bad/route'],
        });

        render(router);
        const homeButton = screen.getByRole('link', {
            name: /back to homepage/i,
        });
        expect(homeButton).toBeInTheDocument();
        await user.click(homeButton);
        await waitFor(() =>
            expect(
                screen.getByRole('heading', {
                    name: /welcome to pepsi's corporate page/i,
                })
            ).toBeInTheDocument()
        );
    });
});
