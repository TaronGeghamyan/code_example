import { AppUrl, trackUrls } from './url';
import { GenerateNewtrack } from '../containers/GenerateNewtrack';
import React from 'react';
import { SupportCentre } from '../containers/SupportCentre';
import { PrivacyPolicy } from '../containers/PrivacyPolicy';
import { CookiePolicy } from '../containers/CookiePolicy';

export const NEW_track_ROUTES = new Map([
  ['es', '/es/:step'],
  ['en', '/en/:step'],
]);

export const SUPPORT_CENTRE_ROUTES = new Map([
  ['es', '/'],
  ['en', '/:'],
]);

export const PRIVACY_POLICY_ROUTES = new Map([
  ['es', '/'],
  ['en', '/:'],
]);

export const COOKIE_POLICY_ROUTES = new Map([
  ['es', '/'],
  ['en', '/:'],
]);

export const newTarckUrl = new trackUrls(NEW_track_ROUTES, <GenerateNewtrack />, true);
export const supportCentreUrl = new AppUrl(SUPPORT_CENTRE_ROUTES, <SupportCentre />);
export const privacyPolicyUrl = new AppUrl(PRIVACY_POLICY_ROUTES, <PrivacyPolicy />);
export const cookiePolicyUrl = new AppUrl(COOKIE_POLICY_ROUTES, <CookiePolicy />);

const AppRoutes: AppUrl[] = [newTarckUrl, supportCentreUrl, privacyPolicyUrl, cookiePolicyUrl];

export default AppRoutes;
