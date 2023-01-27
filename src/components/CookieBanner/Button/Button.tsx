import React, { HTMLProps } from 'react';
import classnames from 'classnames';

import styles from './Button.scss';

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  appearance: 'primary' | 'secondary';
}

export function Button({ appearance, className, ...props }: ButtonProps) {
  return (
    <button
      className={classnames([
        styles.button,
        {
          [styles.primary]: appearance === 'primary',
          [styles.secondary]: appearance === 'secondary',
        },
        className,
      ])}
      {...props}
    />
  );
}
