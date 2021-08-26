import classnames from 'classnames';
import {BORDER_BAD, BORDER_GOOD, TEXT_BAD, TEXT_GOOD} from '../constants';
import {DockProp} from './types';

const getFieldClasses = ({
  touched,
  invalid,
  dock = {},
}: {
  touched?: boolean;
  invalid?: boolean;
  dock?: DockProp;
}) =>
  classnames(
    'block w-full border-2 p-2 focus:outline-none bg-gray-800 focus:ring-4 focus:ring-gray-800 focus:bg-gray-700 text-gray-900',
    {
      'border-t-0': dock.top,
      'border-r-0': dock.right,
      'border-b-0': dock.bottom,
      'border-l-0': dock.left,

      'border-transparent': !touched,

      // valid:
      [TEXT_GOOD]: touched && !invalid,
      [BORDER_GOOD]: touched && !invalid,

      // invalid:
      [TEXT_BAD]: touched && invalid,
      [BORDER_BAD]: touched && invalid,
    }
  );

export default getFieldClasses;
