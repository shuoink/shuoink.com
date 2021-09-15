import {Field} from 'contentful';
import emailRegex from 'email-regex';
import {FieldState, FieldValidator} from 'final-form';

export const required: FieldValidator<any> = value =>
  !value ? '[name] is required.' : undefined;

export const email: FieldValidator<string> = (value: string) =>
  value && !emailRegex({exact: true}).test(value)
    ? '[name] is not a valid email address.'
    : undefined;

export const conditional =
  <VALUE, VALUES extends object>(
    test: (
      value: VALUE,
      allValues: VALUES,
      meta?: FieldState<VALUE>
    ) => boolean,
    validate: FieldValidator<VALUE>
  ): FieldValidator<VALUE> =>
  (value, allValues: object, meta) =>
    test(value, allValues as VALUES, meta)
      ? validate(value, allValues as VALUES, meta)
      : undefined;

export const compose =
  <VALUE>(...validators: Array<FieldValidator<VALUE>>): FieldValidator<VALUE> =>
  (value, allValues, meta) =>
    validators.reduce<string | undefined>(
      (error, validator) => error ?? validator(value, allValues, meta),
      undefined
    );
