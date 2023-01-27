import React, { useRef } from 'react';
import useFocusInput from '../../hooks/useFocusInput';
import { inputType, routing } from '../../constants/typeInterface';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const TableSearch = ({ path, query, onChange }: routing & inputType) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useFocusInput(inputRef);

    return (
        <div className='items-center md:flex md:flex-row md:justify-evenly lg:w-full lg:justify-between lg:mb-4'>
            <div className='grid grid-cols-4 mb-4 md:grid-cols-1 md:mb-0'>
                <label
                    htmlFor={path}
                    className='label col-span-2 md:col-span-1'
                >
                    <span className='label-text'>
                        {path === 'departments'
                            ? 'Search for any department:'
                            : 'Search for any employee:'}
                    </span>
                </label>
                <input
                    id={path}
                    type='text'
                    placeholder={`Any details of ${path}`}
                    value={query}
                    className='input input-bordered w-full col-span-2 max-w-sm'
                    onChange={onChange}
                    ref={inputRef}
                />
            </div>
            <Player
                autoplay={true}
                loop
                src={
                    path === 'departments'
                        ? 'https://assets6.lottiefiles.com/private_files/lf30_lwubnwbl.json'
                        : 'https://assets8.lottiefiles.com/private_files/lf30_hdiNFs.json'
                }
                className='hidden h-[12em] w-full md:block md:justify-self-end lg:h-[20em]'
            >
                <Controls visible={false} />
            </Player>
        </div>
    );
};

export default TableSearch;
