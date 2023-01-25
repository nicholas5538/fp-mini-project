import React, { MouseEventHandler, useState } from 'react';
import Main from '../layouts/Main';
import TableSearch from '../components/Table/TableSearch';
import Modal from '../components/Modal/Modal';
import { EmployeeTable } from '../components/Table/tables';

const Employees = () => {
    const [modalClicked, setModalStatus] = useState<boolean>(false);
    const modalProps = { path: 'employees', modalClicked, setModalStatus };

    const modalEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setModalStatus((prevStatus) => !prevStatus);
    };

    return (
        <>
            <Main className='outlet-container'>
                <div className='flex flex-col mb-4 lg:flex-row lg:justify-between lg:items-center lg:mb-0'>
                    <div className='mb-2 lg:mb-0 lg:mr-4'>
                        <h2>Employees</h2>
                        <h3>
                            Find any employees, their department and location
                        </h3>
                    </div>
                    <button
                        type='button'
                        className='button text-center w-1/3 lg:h-1/2 cursor-pointer'
                        onClick={modalEventHandler}
                    >
                        Add Employees
                    </button>
                </div>
                <TableSearch path={modalProps.path} />
                <EmployeeTable />
            </Main>
            <Modal {...modalProps} />
        </>
    );
};

export default Employees;
