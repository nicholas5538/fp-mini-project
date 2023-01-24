import React, { useRef } from 'react';
import { Form } from 'react-router-dom';
import useOutsideAlerter from '../utils/hooks/useOutsideAlerter';

type modalEvent = {
    modalClicked: boolean;
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ modalClicked, setModalStatus }: modalEvent) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useOutsideAlerter(modalRef, setModalStatus);

    return (
        <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
            <div className='bg-black opacity-50 h-full w-full'></div>
            <div
                ref={modalRef}
                className={`absolute p-4 mx-auto bg-white rounded-2xl shadow-xl max-w-lg w-5/6 ease-out transition duration-300 ${
                    modalClicked === false
                        ? '-translate-y-[40rem]'
                        : 'translate-y-0'
                }`}
            >
                <Form method='post' action='/departments'>
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
                            name='department-id'
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
                            name='department'
                            placeholder='Enter any department name'
                            className='department border p-2 rounded-lg w-5/6'
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='button py-2 mr-4'
                            onClick={(e) => {
                                e.preventDefault();
                                setModalStatus((prevStatus) => !prevStatus);
                            }}
                        >
                            Create
                        </button>
                        <button
                            type='button'
                            className='button py-2 bg-orange-red hover:bg-dark-red'
                            onClick={() =>
                                setModalStatus((prevStatus) => !prevStatus)
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Modal;
