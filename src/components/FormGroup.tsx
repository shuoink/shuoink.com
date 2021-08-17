import {FC, ReactNode} from 'react';

export const FormGroup: FC<{labelFor: string; label: ReactNode}> = ({
  labelFor: id,
  label,
  children,
}) => (
  <label htmlFor={id} className="block">
    <div>{label}:</div>
    {children}
  </label>
);
