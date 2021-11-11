import React, { FC } from 'react';
import { Footer } from '.';
import Header from './Header';

const Layout: FC = ({ children }: {children: React.ReactNode}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
