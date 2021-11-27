import { ApolloError } from '@apollo/client';
import { Button } from 'components/button';
import { TextField } from 'components/text-field';
import { TextareaField } from 'components/textarea-field';
import { useSignupMutation } from 'data/graphql/mutation/signup';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { validateEmail, validatePassword } from 'utils/field-validators';
import { Form } from '../components/Form';

interface FormInput {
  email: string;
  name: string;
  bio?: string;
  password: string;
}

export default function SignUp() {
  const router = useRouter();

  const handleCreateUserComplete = () => {
    router.push('/login');
  };

  const handleCreateUserError = (error: ApolloError) => {
    console.log(error);
  };

  const [createUser, { loading }] = useSignupMutation(
    handleCreateUserComplete,
    handleCreateUserError,
  );

  const handleError: SubmitErrorHandler<FormInput> = (data) => {
    console.log(data);
  };

  const handleSuccess: SubmitHandler<FormInput> = (data) => {
    const isDataValid = validateData(data);
    if (isDataValid) {
      createUser({ variables: { data } });
    }
  };

  return (
    <div className="bg-white p-10 rounded border border-pink-900">
      <h1 className="font-bold text-2xl mb-3">Registration form</h1>
      <Form onSubmit={handleSuccess} onError={handleError}>
        <TextField
          label="Name"
          placeholder="Ex. John Travolta"
          type="text"
          name="name"
        />

        <TextField
          label="Email"
          placeholder="Ex. user@email.com"
          type="email"
          name="email"
        />

        <TextareaField
          label="Bio"
          placeholder="Ex. Actor and dancer"
          name="bio"
        />

        <TextField
          label="Password"
          placeholder="Ex. 12345"
          type="password"
          name="password"
        />

        <Button loading={loading}>Register</Button>
      </Form>
    </div>
  );
}

const validateData = (data: FormInput) => {
  if (!validateEmail(data.email)) {
    alert('Email should be valid. Example: user@register.com');
    return false;
  }

  if (!validatePassword(data.password)) {
    alert(
      'Password should be minimum eight in length have at least one upper case letter, one lower case letter, one digit and one special character',
    );
    return false;
  }

  if (!data?.name) {
    alert('Name is required');
    return false;
  }

  return true;
};
