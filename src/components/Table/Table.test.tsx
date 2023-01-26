import { render, screen } from '../../test-utils/testing-library-util';
import { createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../routes/routesConfig';

test('Table Actions row should render both update and delete svgs', () => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/departments'],
    });

    render(router);

    const actionColumn = screen.getByTestId('action-column 1');
    const actionIcons = screen.getByTestId('action-icons 1');
    const updateIcon = screen.getAllByTestId('update-icon');
    const deleteIcon = screen.getAllByTestId('delete-icon');
    expect(actionColumn).toBeInTheDocument();
    expect(actionColumn).toContainElement(actionIcons);
    expect(actionIcons).toContainElement(updateIcon[0]);
    expect(actionIcons).toContainElement(deleteIcon[0]);
});
