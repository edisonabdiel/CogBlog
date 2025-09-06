import React, { FC } from 'react';
import { Footer } from '.';
import Header from './Header';

const Layout: FC<{children: React.ReactNode}> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
