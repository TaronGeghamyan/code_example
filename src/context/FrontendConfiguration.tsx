import React, { createContext, useContext, useEffect, useState } from 'react';
import { TLocales } from '../i18n/fetchers';
import i18n from 'i18next';

export type TConfiguration = {
  es_tracks_translations_uri: string;
  recaptcha_site_key: string;
};

interface ContextProps {
  children: JSX.Element;
}

export const FrontendConfigurationContext = createContext({
  locale: i18n.language as TLocales,
  frontendConfiguration: {} as TConfiguration,
  setFrontendConfiguration: (configs: TConfiguration) => {},
});

export default function FrontendConfigurationProvider({ children }: ContextProps) {
  const [configuration, setConfiguration] = useState({} as TConfiguration);
  const [locale, setLocale] = useState<TLocales>(i18n.language as TLocales);

  useEffect(() => {
    i18n.on('languageChanged', (language) => {
      setLocale(language as TLocales);
    });
  }, []);

  const setFrontendConfiguration = React.useCallback((configs) => {
    setConfiguration(configs);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      frontendConfiguration: configuration,
      setFrontendConfiguration,
      locale,
    }),
    [locale, configuration, setFrontendConfiguration],
  );

  return (
    <FrontendConfigurationContext.Provider value={contextValue}>
      {children}
    </FrontendConfigurationContext.Provider>
  );
}

export function useFrontendConfigurationContext() {
  return useContext(FrontendConfigurationContext);
}
