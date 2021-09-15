import classNames from 'classnames';
import {FC} from 'react';

const Alert: FC<{type: 'danger' | 'error' | 'success'}> = ({
  type,
  children,
}) => (
  <div
    className={classNames('p-4 text-lg border-2', {
      'text-good-500': type === 'success',
      'border-good-500': type === 'success',
      'bg-good-100': type === 'success',

      // invalid:
      'text-bad-500': type === 'danger' || type === 'error',
      'border-bad-500': type === 'danger' || type === 'error',
      'bg-bad-100': type === 'danger' || type === 'error',
    })}
  >
    {children}
  </div>
);

export default Alert;
