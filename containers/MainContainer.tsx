import * as React from 'react';
import { NextPage } from 'next';

const MainContainer: NextPage = ({ children }) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">{children}</div>
        </div>
    );
};

export default MainContainer;
