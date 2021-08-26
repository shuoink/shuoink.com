import classNames from 'classnames';
import {FC} from 'react';
import {
  BG_BAD,
  BG_GOOD,
  BORDER_BAD,
  BORDER_GOOD,
  TEXT_BAD,
  TEXT_GOOD,
} from '../constants';

const Alert: FC<{type: 'danger' | 'error' | 'success'}> = ({
  type,
  children,
}) => (
  <div
    className={classNames('p-4 text-lg border-2', {
      [TEXT_GOOD]: type === 'success',
      [BORDER_GOOD]: type === 'success',
      [BG_GOOD]: type === 'success',

      // invalid:
      [TEXT_BAD]: type === 'danger' || type === 'error',
      [BORDER_BAD]: type === 'danger' || type === 'error',
      [BG_BAD]: type === 'danger' || type === 'error',
    })}
  >
    {children}
  </div>
);

export default Alert;
