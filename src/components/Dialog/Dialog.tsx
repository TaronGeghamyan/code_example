import React, { FC } from 'react';

import { Button } from 'antd';

import styles from './Dialog.scss';
import { useTranslation } from 'react-i18next';

interface DialogBoxProps {
  showDialog: boolean;
  title: string;
  description: string;
  onCancel?: any;
  onConfirm?: any;
}

export const Dialog: FC<DialogBoxProps> = ({
  title,
  description,
  showDialog,
  onCancel,
  onConfirm,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {showDialog && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{description}</p>
            <div className={styles.buttonBox}>
              <Button
                className={`${styles.cancelBtn} ${styles.button}`}
                onClick={onCancel}
                block
                size="large"
              >
                {t('cancelText')}
              </Button>
              <Button className={styles.button} onClick={onConfirm} block size="large">
                {t('confirmText')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
