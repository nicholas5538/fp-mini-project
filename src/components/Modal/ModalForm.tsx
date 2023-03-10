import React, { useRef } from 'react';
import { Form } from 'react-router-dom';
import { modalEvent } from '../../constants/typeInterface';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import useFocusInput from '../../hooks/useFocusInput';
import { motion } from 'framer-motion';

const ModalForm = ({ path, setModalStatus }: modalEvent) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const idRef = useRef<HTMLInputElement>(null);
    useOutsideAlerter(modalRef, setModalStatus);
    useFocusInput(idRef);

    const clickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setModalStatus((prevStatus) => !prevStatus);
    };

    return (
        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
            <div className='bg-black opacity-50 h-full w-full'></div>
            <motion.div
                ref={modalRef}
                className='absolute p-4 mx-auto bg-white rounded-2xl shadow-xl max-w-lg w-5/6'
                initial={{ translateY: '-4rem' }}
                animate={{ translateY: 0 }}
                exit={{ translateY: '-4rem' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >
                <Form
                    method='post'
                    action={
                        path === 'departments' ? '/departments' : '/employees'
                    }
                >
                    <h3 className='text-black text-2xl font-bold border-b mb-6 tracking-widest'>
                        {path === 'departments'
                            ? 'Create a new department'
                            : 'Assign a new employee'}
                    </h3>
                    <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                        <label
                            htmlFor={
                                path === 'departments'
                                    ? 'department-id'
                                    : 'employee-id'
                            }
                            className='text-blue text-xl font-semibold tracking-wider'
                        >
                            {path === 'departments'
                                ? 'Department ID:'
                                : 'Employee ID:'}
                        </label>
                        <input
                            ref={idRef}
                            type='number'
                            placeholder='Enter any number'
                            name={
                                path === 'departments'
                                    ? 'department-id'
                                    : 'employee-id'
                            }
                            className='border p-2 rounded-lg w-5/6'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                        <label
                            htmlFor={
                                path === 'departments'
                                    ? 'department'
                                    : 'employee-name'
                            }
                            className='text-blue text-xl font-semibold tracking-wider'
                        >
                            Department Name:
                        </label>
                        <input
                            type='text'
                            name={
                                path === 'departments'
                                    ? 'department'
                                    : 'employee-name'
                            }
                            placeholder='Please enter a name'
                            className='border p-2 rounded-lg w-5/6'
                        />
                    </div>
                    {path === 'employees' && (
                        <>
                            <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                                <label
                                    htmlFor='department'
                                    className='text-blue text-xl font-semibold tracking-wider'
                                >
                                    Department Name:
                                </label>
                                <input
                                    type='text'
                                    name='department'
                                    placeholder='Please enter a department name'
                                    className='border p-2 rounded-lg w-5/6'
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                                <label
                                    htmlFor='location'
                                    className='text-blue text-xl font-semibold tracking-wider'
                                >
                                    Location:
                                </label>
                                <input
                                    type='text'
                                    name='Location'
                                    placeholder='Please enter a location'
                                    className='border p-2 rounded-lg w-5/6'
                                />
                            </div>
                        </>
                    )}
                    <div>
                        <button
                            type='submit'
                            className='button py-2 mr-4'
                            onClick={clickHandler}
                        >
                            Looks Good!
                        </button>
                        <button
                            type='button'
                            className='button py-2 bg-orange-red hover:bg-dark-red'
                            onClick={clickHandler}
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            </motion.div>
        </div>
    );
};

export default ModalForm;
