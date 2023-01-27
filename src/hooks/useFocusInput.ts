import { useEffect } from 'react';

const useFocusInput = (ref: React.RefObject<HTMLInputElement>) => {
    useEffect(() => {
        ref.current?.focus();
    });
};

export default useFocusInput;
