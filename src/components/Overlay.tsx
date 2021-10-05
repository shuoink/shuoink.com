import type {VFC} from 'react';
import {useLayoutEffect, useState} from 'react';
import classnames from 'classnames';

export const Overlay: VFC<{
  visible?: boolean;
  close: () => void;
}> = ({visible, close}) => {
  const [isReady, setIsReady] = useState(false);
  useLayoutEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <div
      className={classnames(
        'fixed top-0 right-0 bottom-0 left-0 duration-100',
        {
          'bg-gray-900 dark:bg-gray-100': visible,
          'bg-opacity-0': !isReady,
          'bg-opacity-50': isReady,
        }
      )}
      role="none"
      onClick={close}
      onKeyDown={event => {
        if (event.key === 'ESC') {
          close();
        }
      }}
    />
  );
};
