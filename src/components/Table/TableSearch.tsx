import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const TableSearch = ({ path }: { path: string }) => {
    return (
        <div className='items-center md:flex md:flex-row md:justify-evenly lg:w-full lg:justify-between lg:mb-4'>
            <div className='grid grid-cols-4 mb-4 md:grid-cols-1 md:mb-0'>
                <label className='label col-span-2 md:col-span-1'>
                    <span className='label-text'>
                        {path === 'departments'
                            ? 'Search for any department'
                            : 'Search for any employee:'}
                    </span>
                </label>
                <input
                    type='text'
                    placeholder={
                        path === 'departments'
                            ? 'Name of department'
                            : 'Name of employee'
                    }
                    className='input input-bordered w-full col-span-2 max-w-sm'
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
