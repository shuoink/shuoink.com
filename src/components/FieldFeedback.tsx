import {VFC} from 'react';
import {FieldMetaState} from 'react-final-form';
import classnames from 'classnames';
import getDockClasses, {DockConfig} from '../utils/getDockClasses';
import getValidityClasses from '../utils/getValidityClasses';

const FieldFeedback: VFC<
  FieldMetaState<unknown> & {displayName: string; dock?: DockConfig}
> = ({displayName, touched, invalid, error, submitError, dock = {}}) =>
  touched && invalid ? (
    <div
      className={classnames(
        'border p-4 text-xl rounded-md',
        getDockClasses({...dock, preserveBorder: true}),
        getValidityClasses(false)
      )}
    >
      {(error || submitError).replace(/\[name\]/, displayName)}
    </div>
  ) : null;

export default FieldFeedback;
