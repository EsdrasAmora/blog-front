/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
export type BaseUserFragment = {
  __typename?: 'User';
  id: string;
  bio?: string | null | undefined;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
};

export const BaseUserFragmentDoc = gql`
  fragment BaseUser on User {
    id
    bio
    createdAt
    email
    name
    updatedAt
  }
`;
