import {VFC} from 'react';
import {FieldMetaState} from 'react-final-form';
import classnames from 'classnames';
import {BORDER_BAD, TEXT_BAD} from '../constants';

const FieldFeedback: VFC<FieldMetaState<unknown>> = ({touched, invalid, error, submitError}) =>
  touched && invalid ? (
    <div className={classnames(TEXT_BAD, BORDER_BAD)}>{error || submitError}</div>
  ) : null;

export default FieldFeedback;
