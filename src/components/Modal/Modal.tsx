import React from 'react';
import { Transition } from '@headlessui/react';
import ModalForm from './ModalForm';

type modalProps = {
    path: string;
    modalClicked: boolean;
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ path, modalClicked, setModalStatus }: modalProps) => {
    return (
        <Transition
            appear={true}
            show={modalClicked}
            enter='transition-opacity duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
        >
            <ModalForm path={path} setModalStatus={setModalStatus} />
        </Transition>
    );
};

export default Modal;
