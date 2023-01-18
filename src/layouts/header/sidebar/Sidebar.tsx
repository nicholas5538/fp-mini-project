import React from 'react';
import CompanyBrand from './CompanyBrand';
import SideLinks from './SideLinks';

const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <CompanyBrand />
            <SideLinks />
        </nav>
    );
};

export default Sidebar;
