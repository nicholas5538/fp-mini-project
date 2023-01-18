import React, { useId } from 'react';
import { dropdownObj } from './listObj';

type hiddenStatus = {
    isHidden: boolean;
};

const DropdownItems = ({ isHidden }: hiddenStatus) => {
    return !isHidden ? (
        <>
            {dropdownObj.map((obj) => (
                <li key={useId()}>
                    <div className='route-link'>
                        <obj.svgElement className='md:hidden lg:block' />
                        <span className='route-text'>{obj.text}</span>
                    </div>
                </li>
            ))}
        </>
    ) : null;
};

export default DropdownItems;
