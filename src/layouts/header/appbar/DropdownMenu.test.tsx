import { render, screen } from '../../../test-utils/testing-library-util';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../../routes/routesConfig';

test('Click profile icon to drop down logout menu', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/'],
    });

    render(router);

    const logoutButton = screen.getByTestId('logout');
    expect(logoutButton).toHaveClass(
        'opacity-0 -translate-y-28 pointer-events-none'
    );
    await user.click(screen.getByTestId('profile'));
    expect(logoutButton).toHaveClass(
        'opacity-100 translate-y-0 pointer-events-auto'
    );
    await user.click(document.body);
    expect(logoutButton).toHaveClass(
        'opacity-0 -translate-y-28 pointer-events-none'
    );
});
