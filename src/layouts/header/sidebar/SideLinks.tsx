import React, { MouseEventHandler, useState, useId } from 'react';
import { sidebarObj } from './listObj';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import DropdownItems from './DropdownItems';
import { NavLink } from 'react-router-dom';

const SideLinks = () => {
    const [isHidden, setHiddenStatus] = useState<boolean>(true);

    const clickDropdown: MouseEventHandler = () => {
        setHiddenStatus((prevState) => !prevState);
    };

    const liElements = sidebarObj.map((obj) => {
        const key = useId();
        return obj.text !== 'Company' ? (
            <li key={key}>
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
        ) : (
            <React.Fragment key={key}>
                <li>
                    <div className='route-link' onClick={clickDropdown}>
                        <obj.svgElement className='md:hidden lg:block' />
                        <span className='route-text'>{obj.text}</span>
                        <Arrow
                            className={`arrow ml-2 ${
                                !isHidden ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                    </div>
                </li>
                <DropdownItems isHidden={isHidden} />
            </React.Fragment>
        );
    });

    return <ul>{liElements}</ul>;
};

export default SideLinks;
