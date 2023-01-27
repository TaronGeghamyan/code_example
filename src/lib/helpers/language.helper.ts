import { TTranslations } from '../../i18n/fetchers';

export function getDefaultLanguage() {
  const fromUrl = window.location.pathname.split('/')[1];
  return TTranslations.hasOwnProperty(fromUrl) ? fromUrl : 'es';
}
