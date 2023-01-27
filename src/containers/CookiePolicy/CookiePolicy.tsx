import React, { useState } from 'react';
import { Button, Collapse, Row, Switch } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {
  ADVERTISING_COOKIES,
  FUNCTIONAL_COOKIES,
  getCookiePreferences,
  setCookiePreferences,
  PERFORMANCE_COOKIES,
  Policy,
} from 'web-cookie-policy';

import styles from './CookiePolicy.scss';
import { useTranslation } from 'react-i18next';
import InfoLayout from 'components/InfoLayout/InfoLayout';
import classnames from 'classnames';

import cookiePlc from './CookiePolicy.scss';
import { Alert } from 'components/Alert';
import { debounce } from 'lodash';

const { Panel } = Collapse;

export const CookiePolicy = () => {
  const { t } = useTranslation();
  const defaultSetting =
    getCookiePreferences().length === 0
      ? [FUNCTIONAL_COOKIES, PERFORMANCE_COOKIES, ADVERTISING_COOKIES]
      : getCookiePreferences();
  const [settings, setSettings] = useState<Policy[]>(defaultSetting);
  const [showCookiesSaved, setShowCookiesSaved] = useState<boolean>(false);
  const hideAlert = debounce(() => setShowCookiesSaved(false), 5000);

  const changed = (policy: Policy, enabled: boolean) => {
    const newSettings = enabled ? [...settings, policy] : settings.filter((it) => it !== policy);
    setSettings(newSettings);
    setShowCookiesSaved(false);
  };

  const save = (): void => {
    setCookiePreferences(settings);
    setShowCookiesSaved(true);
    hideAlert();
  };

  const getExtra = (policy: Policy) => {
    return (
      <div className={cookiePlc.collapseExtra}>
        <Switch
          checked={settings.includes(policy)}
          onChange={(checked) => changed(policy, checked)}
          onClick={(checked, event) => {
            event.stopPropagation();
          }}
        />
      </div>
    );
  };
  return (
    <InfoLayout>
      <div className={classnames(styles.title, 'text-center fs-32 mb-24')}>
        {t('cookiePolicy.title')}
      </div>
      <div className={styles.text}>{t('cookiePolicy.text1')}</div>
      <div className={styles.text}>{t('cookiePolicy.text2')}</div>
      <div className={styles.text}>{t('cookiePolicy.text3')}</div>
      <Collapse
        className={cookiePlc.collapse}
        expandIconPosition="right"
        expandIcon={(panelProps) => {
          if (panelProps.isActive) {
            return <MinusCircleOutlined />;
          } else {
            return <PlusCircleOutlined />;
          }
        }}
      >
        <Panel
          collapsible={
            settings.length === 0 ? t('cookiePolicy.functionalCookies.title') : 'enabled'
          }
          header={t('cookiePolicy.functionalCookies.title')}
          key={FUNCTIONAL_COOKIES}
        >
          <div className={styles.text}>{t('cookiePolicy.functionalCookies.text')}</div>
        </Panel>
        <Panel
          collapsible={
            settings.length === 0 ? t('cookiePolicy.performanceCookies.title') : 'enabled'
          }
          header={t('cookiePolicy.performanceCookies.title')}
          key={PERFORMANCE_COOKIES}
          extra={getExtra(PERFORMANCE_COOKIES)}
        >
          <div className={styles.text}>{t('cookiePolicy.performanceCookies.text1')}</div>
          <div className={styles.text}>
            {t('cookiePolicy.performanceCookies.text2')}
            <ul>
              <li>{t('cookiePolicy.performanceCookies.item1')}</li>
              <li>{t('cookiePolicy.performanceCookies.item2')}</li>
              <li>{t('cookiePolicy.performanceCookies.item3')}</li>
              <li>{t('cookiePolicy.performanceCookies.item4')}</li>
              <li>{t('cookiePolicy.performanceCookies.item5')}</li>
              <li>{t('cookiePolicy.performanceCookies.item6')}</li>
            </ul>
            <span>{t('cookiePolicy.performanceCookies.text3')} </span>
            <a href={t('cookiePolicy.performanceCookies.text3Link')}>
              {t('cookiePolicy.performanceCookies.text3ClickHere')}
            </a>
          </div>
          <div className={styles.text}>{t('cookiePolicy.performanceCookies.text4')}</div>
          <div className={styles.text}>{t('cookiePolicy.performanceCookies.text5')}</div>
        </Panel>
        <Panel
          collapsible={
            settings.length === 0 ? t('cookiePolicy.advertisingCookies.title') : 'enabled'
          }
          header={t('cookiePolicy.advertisingCookies.title')}
          key={ADVERTISING_COOKIES}
          extra={getExtra(ADVERTISING_COOKIES)}
        >
          <div className={styles.text}>{t('cookiePolicy.advertisingCookies.text1')}</div>
          <div className={styles.text}>{t('cookiePolicy.advertisingCookies.text2')}</div>
          <div className={styles.text}>{t('cookiePolicy.advertisingCookies.text3')}</div>
          <div className={styles.text}>{t('cookiePolicy.advertisingCookies.text4')}</div>
        </Panel>
      </Collapse>
      <Row justify="end" className="mt-16">
        <Button
          shape="round"
          htmlType="submit"
          type="primary"
          size="large"
          data-testid="submit"
          onClick={() => save()}
        >
          {t('cookiePolicy.saveChanges')}
        </Button>
      </Row>
      {showCookiesSaved && (
        <Row justify="center">
          <Alert className="my-16" text={t('cookiePolicy.cookiesPolicySaved')} type="success" />
        </Row>
      )}
    </InfoLayout>
  );
};
