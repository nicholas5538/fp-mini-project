import React from 'react';

type childrenNode = {
    children: React.ReactNode;
    class?: string;
};

const Main = (props: childrenNode) => {
    return <main className={props.class}>{props.children}</main>;
};

export default Main;
