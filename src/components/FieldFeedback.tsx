import type {VFC} from 'react';
import type {FieldMetaState} from 'react-final-form';
import classnames from 'classnames';
import getDockClasses from '../utils/getDockClasses';
import getValidityClasses from '../utils/getValidityClasses';
import type {DockConfig} from '../utils/types';

const FieldFeedback: VFC<
  FieldMetaState<unknown> & {displayName: string; dock?: DockConfig}
> = ({displayName, touched, invalid, error, submitError, dock = {}}) =>
  touched === true && invalid === true ? (
    <div
      className={classnames(
        'border p-4 text-xl rounded-md',
        getDockClasses({...dock, preserveBorder: true}),
        getValidityClasses(false)
      )}
    >
      {((error ?? submitError) as string).replace(/\[name\]/u, displayName)}
    </div>
  ) : null;

export default FieldFeedback;
