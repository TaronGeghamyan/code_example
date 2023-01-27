import i18n from 'i18next';
import styles from '../Languages.scss';
import React, { useContext } from 'react';
import { AppRouterContext } from '../../../routes/AppRoutesProvider';
import { useTranslation } from 'react-i18next';

interface ILang {
  lang: string;
  text: string;
}

export const LangItem = ({ lang, text }: ILang) => {
  const { getCurrentRouteAliasByLang } = useContext(AppRouterContext);
  const { t } = useTranslation();

  const navigateHandler = () => {
    i18n.changeLanguage(lang);
    const path = getCurrentRouteAliasByLang(lang);
    window.history.replaceState({ lang }, '', path);
    document.title = t('title');
  };

  return (
    <div onClick={navigateHandler} className={`${styles.lang}`} data-name={`lang-${lang}`}>
      {text}
    </div>
  );
};
