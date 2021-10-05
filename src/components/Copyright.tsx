import type {VFC} from 'react';

const Copyright: VFC<{holder: string; start: number}> = ({holder, start}) => {
  const current = new Date().getFullYear();
  return (
    <>
      &copy; {current !== start ? `${start} - ${current}` : current} {holder}
    </>
  );
};

export default Copyright;
