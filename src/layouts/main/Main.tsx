import React from 'react';

type childrenNode = {
    children: React.ReactNode;
};

const Main = ({ children }: childrenNode) => {
    return <main>{children}</main>;
};

export default Main;
