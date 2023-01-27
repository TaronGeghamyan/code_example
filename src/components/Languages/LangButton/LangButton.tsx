import i18n from 'i18next';
import React from 'react';

import { useGetTranslation } from '../../../i18n/hooks/useGetTranslations';
import { useFrontendConfigurationContext } from '../../../context/FrontendConfiguration';
import { TLocales } from 'i18n/fetchers';

import styles from '../Languages.scss';

interface ILang {
  lang: string;
  text: string;
}

export const LangButton = ({ lang, text }: ILang) => {
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;
  const active = lang === getLanguage();
  const { frontendConfiguration } = useFrontendConfigurationContext();
  const { mutate: translationMutate } = useGetTranslation();

  const navigateHandler = () => {
    window.history.pushState({ lang: lang }, '', '/' + lang + window.location.pathname.slice(3));
    translationMutate({
      locale: lang as TLocales,
      translationURL: frontendConfiguration.es_tracks_translations_uri,
    });
    i18n.changeLanguage(lang);
  };

  return (
    <div onClick={navigateHandler} className={`${styles.lang}`} data-name={`lang-${lang}`}>
      {text}
      {active && <div className={styles.active} />}
    </div>
  );
};
