import React from 'react';
import { childrenNode } from '../constants/typeInterface';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }: childrenNode) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
