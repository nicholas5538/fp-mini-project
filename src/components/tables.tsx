import React from 'react';
import { mockDepartments, mockEmployees } from '../constants/mockData';
import { ReactComponent as Update } from '../assets/update.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';

export const updateIcon = (
    <Update className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110' />
);
export const deleteIcon = (
    <Delete className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110 hover:fill-sunshine' />
);

export const DepartmentTable = () => {
    const tdDepartments = mockDepartments.map(({ id, department }) => {
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
        <div className='overflow-x-hidden overflow-y-scroll lg:w-full'>
            <table className='table-normal border-2 border-dark-blue w-full'>
                <thead className='border border-dark-blue'>
                    <tr>
                        <th>Department ID</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{tdDepartments}</tbody>
            </table>
        </div>
    );
};

export const EmployeeTable = () => {
    const tdEmployees = mockEmployees.map(
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
                <tbody>{tdEmployees}</tbody>
            </table>
        </div>
    );
};
