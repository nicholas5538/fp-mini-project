import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className='centered-error-container'>
                <div className='error-container'>
                    <Logo className='absolute top-4 left-4' />
                    <Player
                        autoplay
                        loop
                        src={
                            error.status === 404
                                ? 'https://assets4.lottiefiles.com/packages/lf20_bhw1ul4g.json'
                                : 'https://assets2.lottiefiles.com/temp/lf20_QYm9j9.json'
                        }
                        style={{ height: '15.625em', width: '15.625em' }}
                    >
                        <Controls visible={false} />
                    </Player>
                    <p className='lg:text-xl'>Something went wrong</p>
                    {error.data?.message && <p>{error.data.message}</p>}
                    <p className='lg:text-xl'>
                        Click&nbsp;
                        <Link
                            to='/'
                            className='text-blue font-semibold hover:underline hover:underline-offset-4'
                        >
                            here
                        </Link>
                        &nbsp;to home page
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Oops!</h1>
            </div>
        );
    }
};

export default ErrorBoundary;
