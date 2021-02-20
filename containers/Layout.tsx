import React from 'react';
import MainContainer from './MainContainer';
import Menu from './Menu';
import Header from '@components/Header';

//import Menu from '@components/Menu';
const Layout: React.FC = ({ children }) => {
    const meta = [
        {
            property: 'teste',
            content: 'dddd',
        },
    ];

    return (
        <main>
            <Header meta={meta}></Header>
            <Menu />
            <MainContainer>{children}</MainContainer>
        </main>
    );
};
export default Layout;
