import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ADVERTISING_COOKIES,
  FUNCTIONAL_COOKIES,
  PERFORMANCE_COOKIES,
  setCookiePreferences,
  getCookieAllowanceDate,
} from 'web-cookie-policy';
import { Button } from './Button';
import { cookiePolicyUrl } from '../../routes/AppRoutes';

import styles from './CookieBanner.scss';
import { useFrontendConfigurationContext } from '../../context/FrontendConfiguration';

export const CookieBanner = () => {
  const { locale } = useFrontendConfigurationContext();
  const location = useLocation();
  const navigate = useNavigate();
  if (getCookieAllowanceDate() || location.pathname.indexOf('/cookies') !== -1) {
    return null;
  }
  return (
    <div className={styles.backdrop}>
      <div data-name="cookieContainer" className={styles.container}>
        <div className={styles.divider} />
        <div data-name="cookieBody" className={styles.body}>
          <div data-name="cookieHeader" className={styles.header}>
            Información de las cookies
          </div>
          <div data-name="cookieMessage" className={styles.message}>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            </p>
          </div>
          <div data-name="cookieActions" className={styles.actions}>
            <Button
              data-name="cookieManageAction"
              appearance="primary"
              onClick={() => {
                navigate(cookiePolicyUrl.path({ locale }));
              }}
            >
              Administrar preferencias de cookies
            </Button>
            <Button
              data-name="cookieAllowAllAction"
              appearance="secondary"
              onClick={() => {
                setCookiePreferences([
                  ADVERTISING_COOKIES,
                  FUNCTIONAL_COOKIES,
                  PERFORMANCE_COOKIES,
                ]);
                window.location.reload();
              }}
            >
              Permitir todo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
