import React from 'react';
import { modalProps } from '../../constants/typeInterface';
import ModalForm from './ModalForm';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ path, modalClicked, setModalStatus }: modalProps) => {
    return (
        <AnimatePresence>
            {modalClicked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <ModalForm path={path} setModalStatus={setModalStatus} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
