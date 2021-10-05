import classnames from 'classnames';
import type {DockConfig} from './types';

const getDockClasses = ({
  top,
  right,
  bottom,
  left,
  preserveBorder,
}: DockConfig): string =>
  classnames({
    'border-t-0': top && !preserveBorder,
    'border-r-0': right && !preserveBorder,
    'border-b-0': bottom && !preserveBorder,
    'border-l-0': left && !preserveBorder,

    'rounded-t-none': top,
    'rounded-r-none': right,
    'rounded-b-none': bottom,
    'rounded-l-none': left,
  });

export default getDockClasses;
