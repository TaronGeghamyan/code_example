import React from 'react';

import styles from './Spin.scss';

export const Spin = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100" style={{ width: '118px', height: '118px' }}>
        <defs>
          <linearGradient id="Gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#000096"></stop>

            <stop offset="50%" stopColor="#009ee0"></stop>

            <stop offset="100%" stopColor="#9bff00"></stop>
          </linearGradient>
        </defs>
        <circle className={styles.circle} cx="50" cy="50" r="30" fill="none"></circle>
      </svg>
    </div>
  );
};
