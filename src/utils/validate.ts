import emailRegex from 'email-regex';
import type {FieldState, FieldValidator} from 'final-form';

export const required: FieldValidator<any> = value =>
  !value ? '[name] is required.' : undefined;

export const email: FieldValidator<string> = (value: string) =>
  value && !emailRegex({exact: true}).test(value)
    ? '[name] is not a valid email address.'
    : undefined;

export const conditional =
  <VALUE, VALUES extends {[key: string]: any}>(
    test: (
      value: VALUE,
      allValues: VALUES,
      meta?: FieldState<VALUE>
    ) => boolean,
    validate: FieldValidator<VALUE>
  ): FieldValidator<VALUE> =>
  (value, allValues: {[key: string]: any}, meta) =>
    test(value, allValues as VALUES, meta)
      ? (validate(value, allValues as VALUES, meta) as string | undefined)
      : undefined;

export const compose =
  <VALUE>(...validators: Array<FieldValidator<VALUE>>): FieldValidator<VALUE> =>
  (value, allValues, meta) =>
    validators.reduce<string | null | undefined>(
      (error, validator) =>
        (error ?? validator(value, allValues, meta)) as
          | string
          | null
          | undefined,
      null
    ) ?? undefined;
