import React from 'react';
import { ReactComponent as Profile } from '../../../assets/profile.svg';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import { ReactComponent as Logout } from '../../../assets/logout.svg';

type props = {
    isDrop: boolean;
    clickDropdown: React.MouseEventHandler<HTMLDivElement>;
    dropdownRef: React.RefObject<HTMLDivElement>;
};

const DropdownMenu = ({ isDrop, clickDropdown, dropdownRef }: props) => {
    return (
        <div
            className='header-profile'
            onClick={clickDropdown}
            ref={dropdownRef}
            data-testid='profile'
        >
            <Profile />
            <p className='font-semibold'>NICK</p>
            <Arrow className={`arrow ${isDrop ? 'rotate-180' : 'rotate-0'}`} />
            <div
                className={`header-dropdown-menu ${
                    isDrop
                        ? 'ease-out opacity-100 translate-y-0 pointer-events-auto'
                        : 'ease-in opacity-0 -translate-y-28 pointer-events-none'
                }`}
                data-testid='logout'
            >
                <button className='route-link p-4 mx-auto'>
                    <Logout />
                    <span className='header-dropdown-text'>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default DropdownMenu;
