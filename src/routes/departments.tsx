import React, { MouseEventHandler, useState } from 'react';
import Modal from '../components/departmentModal';
import { Transition } from '@headlessui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { ReactComponent as Update } from '../assets/update.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';
import { mockDepartments } from '../constants/mockData';

const Departments = () => {
    const [modalClicked, setModalStatus] = useState<boolean>(false);
    const modalProps = { modalClicked, setModalStatus };

    const updateIcon = (
        <Update className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110' />
    );
    const deleteIcon = (
        <Delete className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110 hover:fill-sunshine' />
    );

    const modalEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setModalStatus((prevStatus) => !prevStatus);
    };

    const tdElements = mockDepartments.map(({ id, department }) => {
        return (
            <tr key={id}>
                <th>{id}</th>
                <td>{department}</td>
                <td>
                    <div className='flex flex-row justify-center items-center gap-x-1.5'>
                        {updateIcon}
                        {deleteIcon}
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <>
            <section className='py-4 px-6 flex flex-col justify-between items-start max-w-3xl lg:w-2/3 lg:mx-auto'>
                <div className='flex flex-col mb-4 lg:flex-row lg:justify-between lg:items-center lg:mb-0'>
                    <div className='mb-2 lg:mb-0'>
                        <h2>Departments</h2>
                        <h3>
                            Sort your employees and group them by departments
                        </h3>
                    </div>
                    <button
                        type='button'
                        className='button text-center w-1/3 lg:h-1/2 cursor-pointer'
                        onClick={modalEventHandler}
                    >
                        Add Departments
                    </button>
                </div>
                <div className='items-center md:flex md:flex-row md:justify-evenly lg:w-full lg:justify-between lg:mb-4'>
                    <div className='grid grid-cols-4 mb-4 md:grid-cols-1 md:mb-0'>
                        <label className='label col-span-2 md:col-span-1'>
                            <span className='label-text'>
                                Search for any department:
                            </span>
                        </label>
                        <input
                            type='text'
                            placeholder='Department Name'
                            className='input input-bordered w-full col-span-2 max-w-sm'
                        />
                    </div>
                    <Player
                        autoplay
                        loop
                        src='https://assets6.lottiefiles.com/private_files/lf30_lwubnwbl.json'
                        className='hidden h-[12em] w-full md:block md:justify-self-end lg:h-[20em]'
                    >
                        <Controls visible={false} />
                    </Player>
                </div>
                <div className='overflow-x-hidden overflow-y-scroll lg:w-full'>
                    <table className='table-normal border-2 border-dark-blue w-full'>
                        <thead className='border border-dark-blue'>
                            <tr>
                                <th>Department ID</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{tdElements}</tbody>
                    </table>
                </div>
            </section>
            <Transition
                appear={true}
                show={modalClicked}
                enter='transition-opacity duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <Modal {...modalProps} />
            </Transition>
        </>
    );
};

export default Departments;
