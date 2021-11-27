/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

export type CommentKeySpecifier = (
  | 'author'
  | 'authorId'
  | 'createdAt'
  | 'description'
  | 'id'
  | 'postId'
  | 'updatedAt'
  | CommentKeySpecifier
)[];
export type CommentFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  postId?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginResponseKeySpecifier = (
  | 'accessToken'
  | 'user'
  | LoginResponseKeySpecifier
)[];
export type LoginResponseFieldPolicy = {
  accessToken?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createPost'
  | 'deleteUser'
  | 'login'
  | 'removePost'
  | 'signup'
  | 'updatePost'
  | 'updateUser'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createPost?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  removePost?: FieldPolicy<any> | FieldReadFunction<any>;
  signup?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePost?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostKeySpecifier = (
  | 'author'
  | 'claps'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'published'
  | 'title'
  | 'updatedAt'
  | PostKeySpecifier
)[];
export type PostFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  claps?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  published?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | PostConnectionKeySpecifier
)[];
export type PostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostResponseEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | PostResponseEdgeKeySpecifier
)[];
export type PostResponseEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'comment'
  | 'post'
  | 'posts'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'bio'
  | 'createdAt'
  | 'email'
  | 'id'
  | 'name'
  | 'posts'
  | 'updatedAt'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  bio?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Comment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentKeySpecifier
      | (() => undefined | CommentKeySpecifier);
    fields?: CommentFieldPolicy;
  };
  LoginResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginResponseKeySpecifier
      | (() => undefined | LoginResponseKeySpecifier);
    fields?: LoginResponseFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  Post?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier);
    fields?: PostFieldPolicy;
  };
  PostConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostConnectionKeySpecifier
      | (() => undefined | PostConnectionKeySpecifier);
    fields?: PostConnectionFieldPolicy;
  };
  PostResponseEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PostResponseEdgeKeySpecifier
      | (() => undefined | PostResponseEdgeKeySpecifier);
    fields?: PostResponseEdgeFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const namedOperations = {
  Query: {
    Posts: 'Posts' as const,
  },
  Mutation: {
    Signup: 'Signup' as const,
    Login: 'Login' as const,
    SignUp: 'SignUp' as const,
  },
  Fragment: {
    BasePost: 'BasePost' as const,
    BaseUser: 'BaseUser' as const,
  },
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  postId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ConnectionInput = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type CreatePostInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** user jwt access token */
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  deleteUser: User;
  login: LoginResponse;
  removePost?: Maybe<Post>;
  signup: User;
  updatePost?: Maybe<Post>;
  updateUser: User;
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRemovePostArgs = {
  id: Scalars['String'];
};

export type MutationSignupArgs = {
  data: SignupInput;
};

export type MutationUpdatePostArgs = {
  id: UpdatePostInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  claps: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostResponseEdge>>;
  pageInfo: PageInfo;
};

export type PostConnectionInput = {
  pagination: ConnectionInput;
};

export type PostResponseEdge = {
  __typename?: 'PostResponseEdge';
  cursor: Scalars['String'];
  node: Post;
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  post?: Maybe<Post>;
  posts: PostConnection;
};

export type QueryPostArgs = {
  id: Scalars['String'];
};

export type QueryPostsArgs = {
  data: PostConnectionInput;
};

export type SignupInput = {
  bio?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePostInput = {
  claps: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: Post;
  updatedAt: Scalars['DateTime'];
};
