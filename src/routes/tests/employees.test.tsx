import { render, screen } from '../../test-utils/testing-library-util';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../routesConfig';

test('Click add button to display modal', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/employees'],
    });

    render(router);
    const addEmployeeBtn = screen.getByRole('button', {
        name: /add employees/i,
    });
    expect(addEmployeeBtn).toBeInTheDocument();
    await user.click(addEmployeeBtn);
    expect(
        screen.getByPlaceholderText(/please enter a name/i)
    ).toBeInTheDocument();
});
