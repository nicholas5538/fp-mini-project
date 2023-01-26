import { render, screen } from '../../test-utils/testing-library-util';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../routesConfig';

test('Click add button to display modal', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/departments'],
    });

    render(router);
    const addDeptBtn = screen.getByRole('button', { name: /add departments/i });
    expect(addDeptBtn).toBeInTheDocument();
    await user.click(addDeptBtn);
    expect(
        screen.getByPlaceholderText(/name of department/i)
    ).toBeInTheDocument();
});
