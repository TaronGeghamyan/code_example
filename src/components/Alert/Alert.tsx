import React from 'react';
import { Alert as AntdAlert } from 'antd';
import classNames from 'classnames';
import alertIcon from 'icons/alert-gray.svg';

import styles from './Alert.scss';

interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  text: string;
  className?: string;
}

export const Alert = ({ className, type = 'success', text }: AlertProps) => {
  const isError: boolean = type.toLocaleLowerCase() === 'error';

  return (
    <AntdAlert
      className={classNames(className, styles.alert, styles[type])}
      type={type}
      showIcon={isError}
      icon={isError ? <img className={styles.alertIcon} src={alertIcon} alt="alert-icon" /> : null}
      message={text}
    />
  );
};
