import React, { useEffect } from 'react';

type eventFunction = (
    ref: React.RefObject<HTMLDivElement>,
    setState: React.Dispatch<React.SetStateAction<boolean>>
) => void;

const useOutsideAlerter: eventFunction = (ref, setState) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (
                ref.current &&
                !ref.current.contains(e.target as HTMLDivElement)
            ) {
                setState(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [ref]);
};

export default useOutsideAlerter;
