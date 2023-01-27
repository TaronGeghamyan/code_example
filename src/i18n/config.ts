import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGb from './translations/enGb.json';
import esGb from './translations/esGb.json';
import { getDefaultLanguage } from '../lib/helpers/language.helper';

export const resources: Record<string, any> = {
  es: esGb,
  en: enGb,
} as const;

i18n.use(initReactI18next).init({
  lng: getDefaultLanguage(),
  resources,
  defaultNS: 'back',
  fallbackNS: 'translation',
  fallbackLng: false,
});
