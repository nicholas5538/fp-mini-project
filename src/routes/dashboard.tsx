import React, { useId } from 'react';
import Main from '../layouts/Main';
import SkeletonCard from '../components/SkeletonCard';

const Dashboard = () => {
    const skeletonSizes = ['small', 'small', 'small', 'small', 'large'];

    return (
        <Main className='dashboard-container'>
            <div className='col-span-2 justify-self-start'>
                <h2>Dashboard</h2>
                <h3>Welcome to Pepsi&apos;s corporate page</h3>
            </div>
            {skeletonSizes.map((size) => (
                <SkeletonCard key={useId()} size={size} />
            ))}
        </Main>
    );
};

export default Dashboard;
