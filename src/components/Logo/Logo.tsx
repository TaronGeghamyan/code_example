import React, { ImgHTMLAttributes } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import logo from 'components/Header/images/logo.svg';
import footerLogo from 'components/Footer/images/logo.svg';

import styles from './Logo.scss';
import { newTarckUrl } from '../../routes/AppRoutes';
import { useFrontendConfigurationContext } from '../../context/FrontendConfiguration';

export const Logo: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className = null }) => {
  const { locale } = useFrontendConfigurationContext();

  return (
    <Link className={cn(styles.logo, className)} to={newTarckUrl.path({ locale })}>
      <img className={styles.logo} src={logo} alt="track" />
    </Link>
  );
};

export const FooterLogo: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className = null }) => {
  const { locale } = useFrontendConfigurationContext();

  return (
    <Link className={cn(styles.logo, className)} to={newTarckUrl.path({ locale })}>
      <img className={styles.logo} src={footerLogo} alt="" />
    </Link>
  );
};
