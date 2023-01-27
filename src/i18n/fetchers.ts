import axios from 'lib/api/axiosFetcher';
import set from 'lodash/set';

export type TLocales = 'en' | 'es';

export const TTranslations: Record<TLocales, string> = {
  es: 'ES-es',
  en: 'EN-gb',
};

export type TGetTranslationPayload = {
  locale: TLocales;
  translationURL: string | undefined;
};
export const getTranslation = async ({ locale, translationURL }: TGetTranslationPayload) => {
  const response = await axios.get(
    `${translationURL}spain-tr.${TTranslations[locale]}.web.json`,
  );

  const translations = {};
  Object.keys(response.data).forEach((key) => {
    set(translations, key, response.data[key]);
  });

  return translations;
};
