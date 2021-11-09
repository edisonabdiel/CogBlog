import React, { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }: {children: React.ReactNode}) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
