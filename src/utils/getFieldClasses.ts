import classnames from 'classnames';
import {BORDER_BAD, BORDER_GOOD, TEXT_BAD, TEXT_GOOD} from '../constants';

const getFieldClasses = ({touched, invalid}: {touched?: boolean; invalid?: boolean}) =>
  classnames(
    'block w-full border-b-2 border-current p-2 bg-transparent focus:outline-none focus:bg-white',
    {
      // valid:
      [TEXT_GOOD]: touched && !invalid,
      [BORDER_GOOD]: touched && !invalid,

      // invalid:
      [TEXT_BAD]: touched && invalid,
      [BORDER_BAD]: touched && invalid,
    }
  );

export default getFieldClasses;
