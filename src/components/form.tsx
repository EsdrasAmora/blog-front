import React, {
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactNode,
} from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';

interface FormProps<TFieldValues, TContext extends object> {
  children: ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
  useFormProps?: UseFormProps<TFieldValues, TContext>;
}

export function Form<TFieldValues, TContext extends object>({
  useFormProps,
  children,
  onError,
  onSubmit,
}: FormProps<TFieldValues, TContext>) {
  const methods = useForm<TFieldValues, TContext>(useFormProps);
  const { handleSubmit, register } = methods;

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit, onError)}>
      {React.Children.map(children, (child: any) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                key: child.props.name,
                // error: auto pass errors too
              },
            })
          : child;
      })}
    </form>
  );
}
