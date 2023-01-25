import React from 'react';
import { Transition } from '@headlessui/react';
import { modalProps } from '../../constants/typeInterface';
import ModalForm from './ModalForm';

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
