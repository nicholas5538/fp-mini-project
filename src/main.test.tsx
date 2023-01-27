import { setup, screen, waitFor } from './test-utils/testing-library-util';

describe('full app navigation', () => {
    test('Click Departments link goes to /departments', async () => {
        const { user, router } = setup('/');
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
        const { user, router } = setup('/departments');
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
        const { user, router } = setup('/departments');
        await user.click(screen.getByTestId('Company'));
        await user.click(screen.getByRole('link', { name: /locations/i }));
        expect(router.state.location.pathname).toEqual('/locations');
    });

    test('Click Projects link goes to /projects', async () => {
        const { user, router } = setup('/locations');
        await user.click(screen.getByRole('link', { name: /projects/i }));
        expect(router.state.location.pathname).toEqual('/projects');
    });

    test('Click Settings link goes to /settings', async () => {
        const { user, router } = setup('/projects');
        await user.click(screen.getByRole('link', { name: /settings/i }));
        expect(router.state.location.pathname).toEqual('/settings');
    });

    test('Click Dashboard link goes back to /', async () => {
        const { user, router } = setup('/settings');
        await user.click(screen.getByRole('link', { name: /dashboard/i }));
        expect(router.state.location.pathname).toEqual('/');
        expect(
            screen.getByRole('heading', {
                name: /welcome to pepsi's corporate page/i,
            })
        ).toBeInTheDocument();
    });

    test('Landing on an invalid page and navigate back to /', async () => {
        const { user } = setup('/some/bad/route');
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
