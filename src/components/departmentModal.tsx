import React from 'react';
import { Form } from 'react-router-dom';

const Modal = () => {
    return (
        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
            <div className='bg-black opacity-50 h-full w-full'></div>
            <Form
                method='post'
                action='/departments'
                className='absolute p-4 mx-auto bg-white rounded-2xl shadow-xl max-w-lg w-5/6'
            >
                <h3 className='text-black text-2xl font-bold border-b mb-6 tracking-widest'>
                    Create a new department
                </h3>
                <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                    <label
                        htmlFor='department-id'
                        className='text-blue text-xl font-semibold tracking-wider'
                    >
                        Department ID:
                    </label>
                    <input
                        type='number'
                        placeholder='Enter any number'
                        className='department-id border p-2 rounded-lg w-5/6'
                    />
                </div>
                <div className='flex flex-col justify-center items-start gap-y-2 mb-4'>
                    <label
                        htmlFor='department'
                        className='text-blue text-xl font-semibold tracking-wider'
                    >
                        Department Name:
                    </label>
                    <input
                        type='text'
                        placeholder='Enter any department name'
                        className='department border p-2 rounded-lg w-5/6'
                    />
                </div>
                <div>
                    <button type='submit' className='button py-2 mr-4'>
                        Create
                    </button>
                    <button
                        type='button'
                        className='button py-2 bg-red hover:bg-dark-red'
                    >
                        Cancel
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Modal;
