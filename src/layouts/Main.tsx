import React from 'react';

type childrenNode = {
    children: React.ReactNode;
    className?: string;
};

const Main = (props: childrenNode) => {
    return <main className={props.className}>{props.children}</main>;
};

export default Main;
