import React, { useId } from 'react';
import { ReactComponent as Department } from '../../../assets/department.svg';
import { ReactComponent as Employee } from '../../../assets/employee.svg';
import { ReactComponent as Location } from '../../../assets/location.svg';

type hiddenStatus = {
    isHidden: boolean;
};

const liElements = [
    {
        svg: <Department className='md:hidden lg:block' />,
        text: 'Departments',
    },
    {
        svg: <Employee className='md:hidden lg:block' />,
        text: 'Employees',
    },
    {
        svg: <Location className='md:hidden lg:block' />,
        text: 'Locations',
    },
];

const DropdownItems = ({ isHidden }: hiddenStatus) => {
    return !isHidden ? (
        <>
            {liElements.map((element) => (
                <li key={useId()}>
                    <div className='route-link'>
                        {element.svg}
                        <span className='route-text'>{element.text}</span>
                    </div>
                </li>
            ))}
        </>
    ) : null;
};

export default DropdownItems;
