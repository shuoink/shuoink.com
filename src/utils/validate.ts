import emailRegex from 'email-regex';

type Validator<VALUE> = (value: VALUE) => string | undefined;

export const required = (value: string) => (!value ? 'Required' : undefined);

export const email = (value: string) =>
  value && !emailRegex({exact: true}).test(value) ? 'Invalid Email Address' : undefined;

export const compose =
  <VALUE>(...validators: Array<Validator<VALUE>>): Validator<VALUE> =>
  value =>
    validators.reduce<string | undefined>(
      (error, validator) => error ?? validator(value),
      undefined
    );
