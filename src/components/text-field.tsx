import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

type TextFieldProps<TFieldName extends string> = {
  label: string;
  name: TFieldName;
  placeholder: string;
  register?: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField<TFieldName extends string>({
  register,
  name,
  label,
  placeholder,
  ...rest
}: TextFieldProps<TFieldName>) {
  if (!register) {
    throw Error('TextField must be wrapped by a Form');
  }
  return (
    <label className="flex flex-col mb-3">
      {label}
      <input
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-8 focus:border-pink-900 focus:border-opacity-75"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </label>
  );
}
