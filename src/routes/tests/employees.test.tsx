import { setup, screen } from '../../test-utils/testing-library-util';

test('Click add button to display modal', async () => {
    const { user } = setup('/employees');
    const addEmplBtn = screen.getByRole('button', { name: /add employees/i });
    expect(addEmplBtn).toBeInTheDocument();
    await user.click(addEmplBtn);
    expect(
        screen.getByRole('textbox', { name: /search for any employee:/i })
    ).toBeInTheDocument();
});

test('Employee search input is focused upon rendering', () => {
    setup('/employees');
    expect(
        screen.getByRole('textbox', { name: /search for any employee:/i })
    ).toHaveFocus();
});

describe('Data table rendering', () => {
    test('All data is render when search input is empty', async () => {
        const { user } = setup('/employees');
        const cellNames = ['Ronald Mcdonald', 'Nick Young', 'Super Mario'];
        const searchInput = screen.getByRole('textbox', {
            name: /search for any employee:/i,
        });
        await user.clear(searchInput);
        expect(searchInput).toHaveValue('');
        cellNames.forEach((cell) => {
            expect(
                screen.getByRole('cell', { name: cell })
            ).toBeInTheDocument();
        });
    });

    test('Only 1st cell is render when search input is similar', async () => {
        const { user } = setup('/employees');
        const searchInput = screen.getByRole('textbox', {
            name: /search for any employee:/i,
        });
        const nameCell = screen.getByRole('cell', { name: /nick young/i });
        await user.clear(searchInput);
        await user.type(searchInput, 'ronald');
        expect(searchInput).toHaveValue('ronald');
        expect(
            screen.getByRole('cell', { name: /ronald mcdonald/i })
        ).toBeInTheDocument();
        expect(nameCell).not.toBeInTheDocument();
    });

    test('Relevant cell is render regardless of whether input is upper-case or lower-case', async () => {
        const { user } = setup('/employees');
        const searchInput = screen.getByRole('textbox', {
            name: /search for any employee:/i,
        });
        await user.clear(searchInput);
        await user.type(searchInput, 'SUPER mario');
        expect(
            screen.getByRole('cell', { name: /super mario/i })
        ).toBeInTheDocument();
    });
});
