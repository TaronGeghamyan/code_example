import React from 'react';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation/Navigation';

import styles from './Header.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Logo className={styles.logo} />
        <Navigation />
      </div>
    </div>
  );
};
