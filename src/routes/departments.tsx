import React, { MouseEventHandler, useState } from 'react';
import Main from '../layouts/Main';
import Modal from '../components/departmentModal';
import { DepartmentTable } from '../components/tables';
import { Transition } from '@headlessui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Departments = () => {
    const [modalClicked, setModalStatus] = useState<boolean>(false);
    const modalProps = { modalClicked, setModalStatus };

    const modalEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setModalStatus((prevStatus) => !prevStatus);
    };

    return (
        <>
            <Main className='outlet-container'>
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
                <DepartmentTable />
            </Main>
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
