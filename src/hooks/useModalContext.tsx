import React, { createContext, useContext, useState } from 'react';
import { childrenNode } from '../constants/typeInterface';

type modalContextType = {
    modalClicked: boolean;
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
    modalEventHandler: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

const ModalContext = createContext<modalContextType>(
    null as unknown as modalContextType
);

export const useModalContext = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }: childrenNode) => {
    const [modalClicked, setModalStatus] = useState<boolean>(false);

    const modalEventHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setModalStatus((prevStatus) => !prevStatus);
    };

    return (
        <ModalContext.Provider
            value={{ modalClicked, setModalStatus, modalEventHandler }}
        >
            {children}
        </ModalContext.Provider>
    );
};
