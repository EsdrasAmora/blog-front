/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BaseUserFragmentDoc } from '../../fragment/base-user/base-user.fragment.gql';
import * as Apollo from '@apollo/client';
export type CreateUserMutationVariables = Types.Exact<{
  createUserInput: Types.CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'UserResponse';
    bio?: string | null | undefined;
    createdAt: string;
    email: string;
    name: string;
    updatedAt: string;
    userId: string;
  };
};

export const CreateUserDocument = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      ...BaseUser
    }
  }
  ${BaseUserFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
