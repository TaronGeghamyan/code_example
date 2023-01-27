import React from 'react';
import cn from 'classnames';

import styles from './Link.scss';

export type TLink = {
  className?: string;
  children: React.ReactNode;
  target?: string;
  href: string;
  dataName?: string;
};

export const Link: React.FC<TLink> = ({ className, children, target, href, dataName }: TLink) => {
  return (
    <a target={target} href={href} className={cn(styles.link, className)} data-name={dataName}>
      {children}
    </a>
  );
};
