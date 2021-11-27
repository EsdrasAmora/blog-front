import { ApolloError, useMutation } from '@apollo/client';
import {
  SignupDocument,
  SignupMutation,
  SignupMutationVariables,
} from './signup.mutation.gql';

export const useSignupMutation = (
  onCompleted?: () => void,
  onError?: (error: ApolloError) => void,
) => {
  return useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, {
    onCompleted,
    onError,
  });
};
