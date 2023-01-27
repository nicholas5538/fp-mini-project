import { setup, screen } from '../../../test-utils/testing-library-util';

test('Click profile icon to drop down logout menu', async () => {
    const { user } = setup('/');

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
