import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { childrenNode } from '../constants/typeInterface';

type props = {
    className?: string;
} & childrenNode;

const Main = (props: props) => {
    return (
        <AnimatedPage>
            <main className={props.className}>{props.children}</main>
        </AnimatedPage>
    );
};

export default Main;
