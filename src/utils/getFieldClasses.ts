import classnames from 'classnames';
import getDockClasses, {DockConfig} from './getDockClasses';
import getValidityClasses from './getValidityClasses';

const getFieldClasses = ({
  touched,
  invalid,
  dock = {},
  block = true,
  circular = false,
}: {
  touched?: boolean;
  invalid?: boolean;
  dock?: DockConfig;
  block?: boolean;
  circular?: boolean;
}) =>
  classnames(
    'p-2 text-2xl bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent focus:ring-complementary-300 focus:border-gray-100 shadow-lg',
    getDockClasses(dock),
    getValidityClasses(touched ? !invalid : null),
    {
      'block w-full': block,
      'rounded-full': circular,
      'rounded-md': !circular,
    }
  );

export default getFieldClasses;
