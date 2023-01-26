import React from 'react';
import { render } from '@testing-library/react';
import { RouterProvider, RouterProviderProps } from 'react-router-dom';

const renderWithRouterProvider = (router: RouterProviderProps['router']) => {
    return render(<RouterProvider router={router} />);
};

export * from '@testing-library/react';
export { renderWithRouterProvider as render };
