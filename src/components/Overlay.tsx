import type {VFC} from 'react';
import {useLayoutEffect, useState} from 'react';
import classnames from 'classnames';

const Overlay: VFC<{
  visible?: boolean;
  close: () => void;
}> = ({visible, close}) => {
  const [isReady, setIsReady] = useState(false);
  useLayoutEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <div
      className={classnames('fixed inset-0 duration-100', {
        'bg-gray-900 dark:bg-gray-100': visible,
        'bg-opacity-0': !isReady,
        'bg-opacity-75': isReady,
      })}
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

export default Overlay;
