/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BaseUserFragmentDoc } from '../../fragment/base-user/base-user.fragment.gql';
import * as Apollo from '@apollo/client';
export type SignUpMutationVariables = Types.Exact<{
  data: Types.SignupInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signup: {
    __typename?: 'UserResponse';
    bio?: string | null | undefined;
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
    userId: string;
  };
};

export const SignUpDocument = gql`
  mutation SignUp($data: SignupInput!) {
    signup(data: $data) {
      ...BaseUser
    }
  }
  ${BaseUserFragmentDoc}
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
