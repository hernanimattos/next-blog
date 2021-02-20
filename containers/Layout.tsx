import React from 'react';
import MainContainer from './MainContainer';
import Menu from './Menu';
import Header from '@components/Header';

interface Meta {
    property: string;
    content: string;
}

interface IProps {
    meta?: Array<Meta>;
}

const Layout: React.FC<IProps> = ({ children, meta }) => {
    return (
        <main>
            <Header meta={meta}></Header>
            <Menu />
            <MainContainer>{children}</MainContainer>
        </main>
    );
};
export default Layout;
