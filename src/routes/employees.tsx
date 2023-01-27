import React, { useDeferredValue, useState } from 'react';
import Main from '../layouts/Main';
import TableSearch from '../components/Table/TableSearch';
import Modal from '../components/Modal/Modal';
import Table from '../components/Table/Table';
import { useModalContext } from '../hooks/useModalContext';

const Employees = () => {
    const [emplQuery, setEmplQuery] = useState<string>('');
    const { modalClicked, setModalStatus, modalEventHandler } =
        useModalContext();
    const deferredQuery = useDeferredValue(emplQuery);

    const modalProps = { path: 'employees', modalClicked, setModalStatus };

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
                <TableSearch
                    path={modalProps.path}
                    query={emplQuery}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setEmplQuery(e.currentTarget.value)
                    }
                />
                <Table path={modalProps.path} query={deferredQuery} />
            </Main>
            <Modal {...modalProps} />
        </>
    );
};

export default Employees;
