import {VFC} from 'react';
import {FieldMetaState} from 'react-final-form';
import classnames from 'classnames';
import {BG_BAD, BORDER_BAD, TEXT_BAD} from '../constants';
import {DockProp} from '../utils/types';

const FieldFeedback: VFC<FieldMetaState<unknown> & {dock?: DockProp}> = ({
  touched,
  invalid,
  error,
  submitError,
  dock = {},
}) =>
  touched && invalid ? (
    <div
      className={classnames(TEXT_BAD, BG_BAD, 'border-2 p-4 text-xl', BORDER_BAD, {
        'border-t-0': dock.top,
        'border-r-0': dock.right,
        'border-b-0': dock.bottom,
        'border-l-0': dock.left,
      })}
    >
      {error || submitError}
    </div>
  ) : null;

export default FieldFeedback;
