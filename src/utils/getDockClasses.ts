import classnames from 'classnames';

export type DockConfig = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  preserveBorder?: true;
};

const getDockClasses = ({
  top,
  right,
  bottom,
  left,
  preserveBorder,
}: DockConfig) =>
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
