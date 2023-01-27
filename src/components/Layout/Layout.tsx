import React from 'react';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import styles from './Layout.scss';
import classnames from 'classnames';

export type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="is-column full-height">
      <Header />
      <div className={classnames(styles.wrapper, 'w-100')}>
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
