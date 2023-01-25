import React from 'react';
import Main from '../layouts/Main';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { EmployeeTable } from '../components/tables';

const Employees = () => {
    return (
        <Main className='outlet-container'>
            <div className='flex flex-col mb-4 lg:flex-row lg:justify-between lg:items-center lg:mb-0'>
                <div className='mb-2 lg:mb-0'>
                    <h2>Employees</h2>
                    <h3>Find any employees, their department and location</h3>
                </div>
                <button className='button w-1/3 lg:h-1/2'>Add Employees</button>
            </div>
            <div className='items-center md:flex md:flex-row md:justify-evenly lg:w-full lg:justify-between lg:mb-4'>
                <div className='grid grid-cols-4 mb-4 md:grid-cols-1 md:mb-0'>
                    <label className='label col-span-2 md:col-span-1'>
                        <span className='label-text'>Search for any name:</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Employee Name'
                        className='input input-bordered w-full col-span-2 max-w-sm'
                    />
                </div>
                <Player
                    autoplay
                    loop
                    src='https://assets8.lottiefiles.com/private_files/lf30_hdiNFs.json'
                    className='hidden h-[12em] w-full md:block md:justify-self-end lg:h-[20em]'
                >
                    <Controls visible={false} />
                </Player>
            </div>
            <EmployeeTable />
        </Main>
    );
};

export default Employees;
