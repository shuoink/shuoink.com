import classnames from 'classnames';

const getValidityClasses = (isValid: boolean | null): string =>
  classnames({
    'bg-good-100 border-good-500 text-good-500': isValid === true,
    'bg-bad-100 border-bad-500 text-bad-500': isValid === false,
  });

export default getValidityClasses;
