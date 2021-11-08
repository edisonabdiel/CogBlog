import React, { FC } from 'react';
import { Header } from './';

const Layout: FC = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;
