import { ApolloError } from '@apollo/client';
import { Button } from 'components/button';
import { TextField } from 'components/text-field';
import { useLoginMutation } from 'data/graphql/mutation/login';
import { LoginMutation } from 'data/graphql/mutation/login/login-user.mutation.gql';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { Form } from '../components/form';

interface FormInput {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const handleLoginComplete = (data: LoginMutation) => {
    sessionStorage.setItem('@auth-key', data?.login?.accessToken);

    router.push('/');
  };

  const handleLoginError = (error: ApolloError) => {
    alert(error.message);
  };

  const [login, { loading }] = useLoginMutation(
    handleLoginComplete,
    handleLoginError,
  );

  const handleSuccess: SubmitHandler<FormInput> = (data) => {
    login({ variables: { data } });
  };

  const handleError: SubmitErrorHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-10 rounded border border-pink-900">
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <Form onSubmit={handleSuccess} onError={handleError}>
        <TextField
          label="Email"
          placeholder="Ex. you@gmail.com"
          type="text"
          name="email"
        />

        <TextField
          label="Password"
          placeholder="Ex. 12345"
          type="password"
          name="password"
        />

        <Button loading={loading}>Login</Button>
      </Form>
    </div>
  );
}
