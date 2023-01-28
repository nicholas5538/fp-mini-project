import React, { useId } from 'react';
import { NavLink } from 'react-router-dom';
import { dropdownObj } from '../../../constants/listObj';

const DropdownItems = () => {
    const dropdownElements = dropdownObj.map((obj) => (
        <li key={useId()}>
            <NavLink
                to={obj.path}
                className={({ isActive }) =>
                    isActive ? 'route-link-active' : 'route-link'
                }
            >
                <obj.svgElement className='md:hidden lg:block' />
                <span className='route-text'>{obj.text}</span>
            </NavLink>
        </li>
    ));

    return <>{dropdownElements}</>;
};

export default DropdownItems;
