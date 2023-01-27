import { setup, screen, waitFor } from '../../test-utils/testing-library-util';

describe('Test modal hidden and display status when button is clicked', () => {
    test('Modal is hidden when the cancel button is clicked', async () => {
        const { user } = setup('/departments');
        await user.click(
            screen.getByRole('button', { name: /add departments/i })
        );
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        await user.click(cancelButton);
        await waitFor(() => expect(cancelButton).not.toBeInTheDocument());
    });

    test('Modal is hidden when the create button is clicked', async () => {
        const { user } = setup('/departments');
        await user.click(
            screen.getByRole('button', { name: /add departments/i })
        );
        const createButton = screen.getByRole('button', {
            name: /looks good!/i,
        });
        await user.click(document.body);
        await waitFor(() => expect(createButton).not.toBeInTheDocument());
    });

    test('Modal is hidden when the document body is clicked', async () => {
        const { user } = setup('/departments');
        await user.click(
            screen.getByRole('button', { name: /add departments/i })
        );
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        await user.click(document.body);
        await waitFor(() => expect(cancelButton).not.toBeInTheDocument());
    });
});

test("Modal form's ID input is focused upon rendering", async () => {
    const { user } = setup('/departments');
    await user.click(screen.getByRole('button', { name: /add departments/i }));
    expect(screen.getByRole('spinbutton')).toHaveFocus();
});
