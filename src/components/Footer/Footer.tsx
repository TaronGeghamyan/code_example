/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { cookiePolicyUrl, privacyPolicyUrl, supportCentreUrl } from '../../routes/AppRoutes';

import styles from './Footer.scss';
import { useFrontendConfigurationContext } from '../../context/FrontendConfiguration';

export const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const { locale } = useFrontendConfigurationContext();

  return (
    <footer>
      <div className={styles.stripe} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.boxThree}>
            <Logo className={styles.logo} />
            <span className={styles.rigths}>
              {t('footer.copyrightTitle') +
                ' ' +
                new Date().getFullYear() +
                ' ' +
                t('footer.copyrightText')}
            </span>
          </div>
          <div className={`${styles.box} ${styles.boxOne}`}>
            <h3 className={styles.subTitle}>{t('footer.usefulInfo')}</h3>
            <Link to={supportCentreUrl.path({ locale })} className={styles.item}>
              {t('footer.supportCentre')}
            </Link>
            <Link to={cookiePolicyUrl.path({ locale })} className={styles.item}>
              {t('footer.cookiePolicy')}
            </Link>
            <Link to={privacyPolicyUrl.path({ locale })} className={styles.item}>
              {t('footer.privacyPolicy')}
            </Link>
          </div>
          <div className={`${styles.box} ${styles.boxTwo}`}>
            <h3 className={styles.subTitle}>{t('footer.headOffices')}</h3>
            <span className={styles.item}>{t('footer.headOfficesAddress')}</span>
            <span className={styles.item}>{t('footer.headOfficesPhone')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
