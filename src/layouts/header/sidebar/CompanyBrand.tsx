import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const CompanyBrand = (): JSX.Element => {
    return (
        <>
            <div className='sidebar-brand-container'>
                <Logo className='mb-2' />
                <h3>Corporate</h3>
            </div>
            <hr className='sidebar-hr'></hr>
        </>
    );
};

export default CompanyBrand;
