import React from 'react';
import { useNavigation, Outlet } from 'react-router-dom';
import Sidebar from '../layouts/header/sidebar/Sidebar';
import AppBar from '../layouts/header/appbar/Appbar';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className='grid grid-cols-6'>
            <Sidebar />
            <div className='col-span-5'>
                <AppBar />
                <div
                    className={navigation.state === 'loading' ? 'loading' : ''}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;
