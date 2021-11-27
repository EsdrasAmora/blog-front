/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
export type BasePostFragment = {
  __typename?: 'Post';
  id: string;
  claps: number;
  content: string;
  createdAt: string;
  published: boolean;
  title: string;
  updatedAt: string;
};

export const BasePostFragmentDoc = gql`
  fragment BasePost on Post {
    id
    claps
    content
    createdAt
    published
    title
    updatedAt
  }
`;
