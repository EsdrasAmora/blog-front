/* eslint-disable */
import * as Types from '../../../../types.gql';

import { gql } from '@apollo/client';
import { BasePostFragmentDoc } from '../../fragment/base-post/base-post.fragment.gql';
import { BaseUserFragmentDoc } from '../../fragment/base-user/base-user.fragment.gql';
import * as Apollo from '@apollo/client';
export type PostsQueryVariables = Types.Exact<{
  data: Types.PostConnectionInput;
}>;

export type PostsQuery = {
  __typename?: 'Query';
  posts: {
    __typename?: 'PostConnection';
    edges?:
      | Array<{
          __typename?: 'PostResponseEdge';
          cursor: string;
          node: {
            __typename?: 'Post';
            id: string;
            claps: number;
            content: string;
            createdAt: string;
            published: boolean;
            title: string;
            updatedAt: string;
            author: {
              __typename?: 'User';
              id: string;
              bio?: string | null | undefined;
              createdAt: string;
              email: string;
              name: string;
              updatedAt: string;
            };
          };
        }>
      | null
      | undefined;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null | undefined;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null | undefined;
    };
  };
};

export const PostsDocument = gql`
  query Posts($data: PostConnectionInput!) {
    posts(data: $data) {
      edges {
        node {
          ...BasePost
          author {
            ...BaseUser
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
  ${BasePostFragmentDoc}
  ${BaseUserFragmentDoc}
`;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
