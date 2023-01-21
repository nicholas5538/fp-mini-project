import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const CompanyBrand = (): JSX.Element => {
    return (
        <>
            <div className='sidebar-brand-container'>
                <Link to='/'>
                    <Logo className='mb-2' />
                </Link>
                <h3 className='hidden md:block'>Corporate</h3>
            </div>
            <hr className='sidebar-hr'></hr>
        </>
    );
};

export default CompanyBrand;
