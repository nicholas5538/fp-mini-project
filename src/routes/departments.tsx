import React, { MouseEventHandler, useState } from 'react';
import Main from '../layouts/Main';
import TableSearch from '../components/Table/TableSearch';
import Modal from '../components/Modal/Modal';
import { DepartmentTable } from '../components/Table/tables';

const Departments = () => {
    const [modalClicked, setModalStatus] = useState<boolean>(false);
    const modalProps = { path: 'departments', modalClicked, setModalStatus };

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
                <TableSearch path={modalProps.path} />
                <DepartmentTable />
            </Main>
            <Modal {...modalProps} />
        </>
    );
};

export default Departments;
