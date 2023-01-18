import React, { MouseEventHandler, useState, useId } from 'react';
import { ReactComponent as Dashboard } from '../../../assets/dashboard.svg';
import { ReactComponent as Company } from '../../../assets/company.svg';
import { ReactComponent as Arrow } from '../../../assets/arrow.svg';
import { ReactComponent as Project } from '../../../assets/project.svg';
import { ReactComponent as Settings } from '../../../assets/settings.svg';
import DropdownItems from './DropdownItems';

const SideLinks = () => {
    const [isHidden, setHiddenStatus] = useState<boolean>(true);

    const clickDropdown: MouseEventHandler = () => {
        setHiddenStatus((prevState) => !prevState);
    };

    const liObj = [
        {
            svg: <Dashboard className='md:hidden lg:block' />,
            text: 'Dashboard',
        },
        {
            svg: <Company className='md:hidden lg:block' />,
            text: 'Company',
        },
        {
            svg: <Project className='md:hidden lg:block' />,
            text: 'Projects',
        },
        {
            svg: <Settings className='md:hidden lg:block' />,
            text: 'Settings',
        },
    ];

    const liElements = liObj.map((element) => {
        const key = useId();
        return element.text !== 'Company' ? (
            <li key={key}>
                <div className='route-link'>
                    {element.svg}
                    <span className='route-text'>{element.text}</span>
                </div>
            </li>
        ) : (
            <React.Fragment key={key}>
                <li>
                    <div className='route-link' onClick={clickDropdown}>
                        {element.svg}
                        <span className='route-text'>{element.text}</span>
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
