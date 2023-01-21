import React from 'react';

type SkeletonSize = {
    size: string;
};

const SkeletonCard = ({ size }: SkeletonSize) => {
    return (
        <div
            className={`col-span-2 border border-kimoby shadow rounded-md p-4 mx-auto max-w-sm w-10/12 ${
                size === 'small'
                    ? 'lg:col-span-1'
                    : 'lg:max-w-[690px] lg:w-11/12'
            }`}
        >
            <div className='animate-pulse flex space-x-4'>
                <div className='rounded-full bg-blue h-10 w-10'></div>
                <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-blue rounded'></div>
                    <div className='space-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-blue rounded col-span-2'></div>
                            <div className='h-2 bg-blue rounded col-span-1'></div>
                        </div>
                        <div className='h-2 bg-blue rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
