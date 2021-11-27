import { UseFormRegister } from 'react-hook-form';
import { TextareaHTMLAttributes } from 'react';

type TextareaFieldProps<TFieldName extends string> = {
  label: string;
  name: TFieldName;
  register?: UseFormRegister<any>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField<TFieldName extends string>({
  label,
  register,
  name,
  ...rest
}: TextareaFieldProps<TFieldName>) {
  if (!register) {
    throw Error('TextareaField must be wrapped by a Form');
  }
  return (
    <label className="flex flex-col mb-3">
      {label}
      <textarea
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-8 focus:border-pink-900 focus:border-opacity-75"
        {...register(name)}
        {...rest}
      />
    </label>
  );
}
