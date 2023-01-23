import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { ReactComponent as Update } from '../assets/update.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';
import { mockEmployees } from '../constants/mockData';

const Departments = () => {
    const updateIcon = (
        <Update className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110' />
    );
    const deleteIcon = (
        <Delete className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110 hover:fill-sunshine' />
    );

    const tdElements = mockEmployees.map(
        ({ id, name, department, location }) => {
            return (
                <tr key={id}>
                    <th>{id}</th>
                    <td>{name}</td>
                    <td>{department}</td>
                    <td>{location}</td>
                    <td>
                        <div className='flex flex-row justify-center items-center gap-x-1.5'>
                            {updateIcon}
                            {deleteIcon}
                        </div>
                    </td>
                </tr>
            );
        }
    );

    return (
        <section className='py-4 px-6 flex flex-col justify-between items-start max-w-3xl lg:w-2/3 lg:mx-auto'>
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
            <div className='overflow-x-hidden overflow-y-scroll lg:w-full'>
                <table className='table-normal border-2 border-dark-blue w-full'>
                    <thead className='border border-dark-blue'>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{tdElements}</tbody>
                </table>
            </div>
        </section>
    );
};

export default Departments;
