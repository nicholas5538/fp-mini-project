import { setup, screen } from '../../test-utils/testing-library-util';

describe('Test modal hidden and display status when button is clicked', () => {
    test('Modal is hidden when the cancel button is clicked', async () => {
        const { user } = setup('/departments');
        await user.click(
            screen.getByRole('button', { name: /add departments/i })
        );
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        await user.click(cancelButton);
        expect(cancelButton).not.toBeInTheDocument();
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
        expect(createButton).not.toBeInTheDocument();
    });

    test('Modal is hidden when the document body is clicked', async () => {
        const { user } = setup('/departments');
        await user.click(
            screen.getByRole('button', { name: /add departments/i })
        );
        const cancelButton = screen.getByRole('button', { name: /cancel/i });
        await user.click(document.body);
        expect(cancelButton).not.toBeInTheDocument();
    });
});
