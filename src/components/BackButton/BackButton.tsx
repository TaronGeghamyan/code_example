import React from 'react';
import ArrowIcon from 'icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';

import styles from './BackButton.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  backUrl?: string;
}

export const BackButton = ({ backUrl }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleClick(): void {
    // TODO decide do back action with browser history when not specified url
    navigate(backUrl || '/');
  }

  return (
    <div onClick={handleClick} className={styles.backButton}>
      <img alt="back" src={ArrowIcon} />
      <span>{t('backText')}</span>
    </div>
  );
};
