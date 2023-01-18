import './App.css';
import React from 'react';
import Sidebar from './layouts/header/sidebar/Sidebar';

function App() {
    return (
        <div className='grid grid-cols-6'>
            <Sidebar />
            <div className='col-span-5'></div>
        </div>
    );
}

export default App;
