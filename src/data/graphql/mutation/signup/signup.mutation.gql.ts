/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BaseUserFragmentDoc } from '../../fragment/base-user/base-user.fragment.gql';
import * as Apollo from '@apollo/client';
export type SignupMutationVariables = Types.Exact<{
  data: Types.SignupInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: {
    __typename?: 'User';
    id: string;
    bio?: string | null | undefined;
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
  };
};

export const SignupDocument = gql`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      ...BaseUser
    }
  }
  ${BaseUserFragmentDoc}
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
