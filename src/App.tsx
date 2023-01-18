import React from 'react';
import Sidebar from './layouts/header/sidebar/Sidebar';
import AppBar from './layouts/header/appbar/Appbar';


function App() {
    return (
        <div className='grid grid-cols-6'>
            <Sidebar />
            <div className='col-span-5'>
                <AppBar />
            </div>
        </div>
    );
}

export default App;
