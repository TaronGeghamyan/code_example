import React from 'react';
import { BackButton } from 'components/BackButton';

import styles from './InfoLayout.scss';
import classnames from 'classnames';

interface Props {
  hideBackBtn?: boolean;
  children?: any;
}

const InfoLayout = ({ hideBackBtn, children }: Props) => {
  return (
    <section>
      {!hideBackBtn && <BackButton />}
      <div className="divider" />
      <div className={classnames(styles.infoContent, 'mx-auto')}>{children}</div>
    </section>
  );
};

export default InfoLayout;
