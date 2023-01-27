import React from 'react';
import { routing, queryType } from '../../constants/typeInterface';
import { employees, departments } from '../../utils/filterTd';

const Table = ({ path, query }: routing & queryType) => {
    return (
        <div className='overflow-auto w-full'>
            <table className='table-normal border-2 border-dark-blue w-full'>
                <thead className='border border-dark-blue'>
                    <tr>
                        {path === 'departments' ? (
                            <>
                                <th>Department ID</th>
                                <th>Department</th>
                            </>
                        ) : (
                            <>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Location</th>
                            </>
                        )}

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {path === 'departments'
                        ? departments(query)
                        : employees(query)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
