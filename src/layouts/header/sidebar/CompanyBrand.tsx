import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const CompanyBrand = (): JSX.Element => {
    return (
        <>
            <div className='flex-col justify-center item-center py-4'>
                <Logo className='inline-block mb-2' />
                <h3>Corporate</h3>
            </div>
            <hr className='sidebar-hr'></hr>
        </>
    );
};

export default CompanyBrand;
