import i18n from 'i18next';
import React from 'react';
import { LangItem } from 'components/Languages/LangItem';

import styles from '../Languages.scss';

export const LangDropList = () => {
  const languages = Object.keys(i18n.store.data);
  const text = i18n.language;

  return (
    <div className={`${styles.langs}`} data-name="languages">
      <span>{text}</span>
      <i className={`${styles.chevronUp}`}></i>
      <i className={`${styles.chevronDown}`}></i>

      <div className={`${styles.langList}`}>
        {languages.map((value) => {
          if (text === value) {
            return <div key={`fail_lang  ${value}`} />;
          }
          return <LangItem key={`fail_lang ${value}`} lang={value} text={value} />;
        })}
      </div>
    </div>
  );
};
