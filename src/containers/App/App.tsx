import React, { useEffect, useState } from 'react';
import { getFrontendConfiguration } from './fetchers';
import AppRoutesProvider from '../../routes/AppRoutesProvider';
import { useGetTranslation } from '../../i18n/hooks/useGetTranslations';
import { useFrontendConfigurationContext } from '../../context/FrontendConfiguration';
import { useTranslation } from 'react-i18next';

export const App: React.FC = () => {
  const { frontendConfiguration, locale, setFrontendConfiguration } =
    useFrontendConfigurationContext();
  const { mutate: translationMutate } = useGetTranslation();
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>();
  const { t } = useTranslation();

  useEffect(() => {
    getFrontendConfiguration()
      .then((response) => setFrontendConfiguration(response))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (frontendConfiguration.recaptcha_site_key) {
      setRecaptchaSiteKey(frontendConfiguration.recaptcha_site_key);
    }
  }, [frontendConfiguration.recaptcha_site_key]);

  useEffect(() => {
    document.title = t('title');

    const translationURL = frontendConfiguration.es_tracks_translations_uri;
    if (locale && translationURL) {
      translationMutate({ locale, translationURL });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, translationMutate, frontendConfiguration.es_tracks_translations_uri]);

  return <AppRoutesProvider recaptchaSiteKey={recaptchaSiteKey} />;
};
