import { setup, screen } from '../../test-utils/testing-library-util';

test('Click add button to display modal', async () => {
    const { user } = setup('/departments');
    const addDeptBtn = screen.getByRole('button', { name: /add departments/i });
    expect(addDeptBtn).toBeInTheDocument();
    await user.click(addDeptBtn);
    expect(
        screen.getByRole('textbox', { name: /search for any department:/i })
    ).toBeInTheDocument();
});

test('Department search input is focused upon rendering', () => {
    setup('/departments');
    expect(
        screen.getByRole('textbox', { name: /search for any department:/i })
    ).toHaveFocus();
});

describe('Data table rendering', () => {
    test('All data is render when search input is empty', async () => {
        const { user } = setup('/departments');
        const cellNames = ['A', 'B', 'C'];
        const searchInput = screen.getByRole('textbox', {
            name: /search for any department:/i,
        });
        await user.clear(searchInput);
        expect(searchInput).toHaveValue('');
        cellNames.forEach((cell) => {
            expect(
                screen.getByRole('cell', { name: `Department ${cell}` })
            ).toBeInTheDocument();
        });
    });

    test('Only 1st cell is render when search input is similar', async () => {
        const { user } = setup('/departments');
        const searchInput = screen.getByRole('textbox', {
            name: /search for any department:/i,
        });
        const departmentB = screen.getByRole('cell', { name: /department b/i });
        await user.clear(searchInput);
        await user.type(searchInput, 'department a');
        expect(searchInput).toHaveValue('department a');
        expect(
            screen.getByRole('cell', { name: /department a/i })
        ).toBeInTheDocument();
        expect(departmentB).not.toBeInTheDocument();
    });

    test('Relevant cell is render regardless of whether input is upper-case or lower-case', async () => {
        const { user } = setup('/departments');
        const searchInput = screen.getByRole('textbox', {
            name: /search for any department:/i,
        });
        await user.clear(searchInput);
        await user.type(searchInput, 'department A');
        expect(
            screen.getByRole('cell', { name: /department a/i })
        ).toBeInTheDocument();
    });
});
