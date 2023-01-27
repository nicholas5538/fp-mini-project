import React from 'react';
import { mockDepartments, mockEmployees } from '../constants/mockData';
import { Itable } from '../constants/typeInterface';
import { ReactComponent as Update } from '../assets/update.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';

const updateIcon = (
    <Update
        className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110'
        data-testid='update-icon'
    />
);
const deleteIcon = (
    <Delete
        className='cursor-pointer ease-linear transition-all duration-150 hover:scale-110 hover:fill-sunshine'
        data-testid='delete-icon'
    />
);

const filterData = (data: Itable[], keys: string[], query: string) => {
    return data.filter((item) =>
        keys.some((key) =>
            item[key].toLowerCase().includes(query.toLowerCase())
        )
    );
};

export const departments = (query: string) => {
    const tdDepartments = filterData(
        mockDepartments,
        ['id', 'department'],
        query
    ).map(({ id, department }, index) => {
        return (
            <tr key={id}>
                <th>{id}</th>
                <td>{department}</td>
                <td data-testid={`action-column ${index + 1}`}>
                    <div
                        className='flex flex-row justify-center items-center gap-x-1.5'
                        data-testid={`action-icons ${index + 1}`}
                    >
                        {updateIcon}
                        {deleteIcon}
                    </div>
                </td>
            </tr>
        );
    });

    return tdDepartments;
};

export const employees = (query: string) => {
    const emplKeys = ['id', 'name', 'department', 'location'];
    const tdEmployees = filterData(mockEmployees, emplKeys, query).map(
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

    return tdEmployees;
};
