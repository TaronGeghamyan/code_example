import axios from 'lib/api/axiosFetcher';

import { SERVER_URL_FRONTEND_CONFIGURATION } from 'routes/serverUrls';

export type TConfiguration = {
  es_tracks_translations_uri: string;
  recaptcha_site_key: string;
};
export const getFrontendConfiguration = async () => {
  const response = await axios.get<TConfiguration>(SERVER_URL_FRONTEND_CONFIGURATION.path());
  return response.data;
};
