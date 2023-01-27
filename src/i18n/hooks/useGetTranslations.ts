import i18n from 'i18next';
import { useMutation } from 'react-query';
import { TGetTranslationPayload, getTranslation } from 'i18n/fetchers';

export const useGetTranslation = () => {
  return useMutation((payload: TGetTranslationPayload) => getTranslation(payload), {
    onSuccess: (response: any, payload: TGetTranslationPayload) => {
      i18n.addResourceBundle(payload.locale, 'back', response);
      i18n.changeLanguage(payload.locale);
    },
  });
};
