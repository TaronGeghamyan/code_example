import {
  compose,
  withGoogleTagManager,
  withQueryParams,
  WithTagManagerOptions,
} from 'web-cookie-policy';
import { ANALYTICS_ID, GTM_ID } from '../../constants';
import { CookieBanner } from 'components/CookieBanner';

const CookiePolicyWidget = compose(
  withQueryParams({ paramName: 'allowedCookies' }),
  withGoogleTagManager({ analyticsId: ANALYTICS_ID, gtmId: GTM_ID } as WithTagManagerOptions),
)(CookieBanner);

export default CookiePolicyWidget;
