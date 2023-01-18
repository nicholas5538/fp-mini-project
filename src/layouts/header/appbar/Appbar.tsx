import React, { MouseEventHandler, useRef, useState } from 'react';
import { ReactComponent as Notification } from '../../../assets/notification.svg';
import DropdownMenu from './DropdownMenu';
import useOutsideAlerter from '../../../utils/hooks/useOutsideAlerter';

const AppBar = () => {
    const [isDrop, setDropStatus] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(dropdownRef, setDropStatus);

    const clickDropdown: MouseEventHandler<HTMLDivElement> = () => {
        setDropStatus((prevStatus) => !prevStatus);
    };

    const props = { isDrop, clickDropdown, dropdownRef };

    return (
        <header>
            <Notification className='cursor-pointer' />
            <DropdownMenu {...props} />
        </header>
    );
};

export default AppBar;
