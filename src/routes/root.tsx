import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layouts/header/sidebar/Sidebar';
import AppBar from '../layouts/header/appbar/Appbar';
import Footer from '../layouts/Footer';
import { ModalProvider } from '../hooks/useModalContext';

const Root = () => {
    return (
        <div className='grid grid-cols-6'>
            <Sidebar />
            <div className='col-span-5'>
                <AppBar />
                <div>
                    <ModalProvider>
                        <Outlet />
                    </ModalProvider>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;
