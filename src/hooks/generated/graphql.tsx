import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  addEmailUser?: Maybe<Auth>;
  addFacebookUser?: Maybe<Auth>;
  auth?: Maybe<Auth>;
  hi?: Maybe<Scalars['String']>;
};


export type QueryAddEmailUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type QueryAddFacebookUserArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type QueryAuthArgs = {
  id: Scalars['String'];
  provider: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
};

export type AuthQueryVariables = Exact<{
  id: Scalars['String'];
  provider: Scalars['String'];
}>;


export type AuthQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', name?: string | null } } | null };

export type AddEmailUserQueryVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type AddEmailUserQuery = { __typename?: 'Query', addEmailUser?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', name?: string | null } } | null };

export type AddFacebookUserQueryVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddFacebookUserQuery = { __typename?: 'Query', addFacebookUser?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', name?: string | null } } | null };


export const AuthDocument = gql`
    query auth($id: String!, $provider: String!) {
  auth(id: $id, provider: $provider) {
    token
    user {
      name
    }
  }
}
    `;

/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *      id: // value for 'id'
 *      provider: // value for 'provider'
 *   },
 * });
 */
export function useAuthQuery(baseOptions: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export const AddEmailUserDocument = gql`
    query addEmailUser($email: String!, $name: String!, $password: String!) {
  addEmailUser(email: $email, name: $name, password: $password) {
    token
    user {
      name
    }
  }
}
    `;

/**
 * __useAddEmailUserQuery__
 *
 * To run a query within a React component, call `useAddEmailUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddEmailUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddEmailUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAddEmailUserQuery(baseOptions: Apollo.QueryHookOptions<AddEmailUserQuery, AddEmailUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AddEmailUserQuery, AddEmailUserQueryVariables>(AddEmailUserDocument, options);
      }
export function useAddEmailUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddEmailUserQuery, AddEmailUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AddEmailUserQuery, AddEmailUserQueryVariables>(AddEmailUserDocument, options);
        }
export type AddEmailUserQueryHookResult = ReturnType<typeof useAddEmailUserQuery>;
export type AddEmailUserLazyQueryHookResult = ReturnType<typeof useAddEmailUserLazyQuery>;
export type AddEmailUserQueryResult = Apollo.QueryResult<AddEmailUserQuery, AddEmailUserQueryVariables>;
export const AddFacebookUserDocument = gql`
    query addFacebookUser($id: String!, $name: String!) {
  addFacebookUser(id: $id, name: $name) {
    token
    user {
      name
    }
  }
}
    `;

/**
 * __useAddFacebookUserQuery__
 *
 * To run a query within a React component, call `useAddFacebookUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddFacebookUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddFacebookUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddFacebookUserQuery(baseOptions: Apollo.QueryHookOptions<AddFacebookUserQuery, AddFacebookUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AddFacebookUserQuery, AddFacebookUserQueryVariables>(AddFacebookUserDocument, options);
      }
export function useAddFacebookUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddFacebookUserQuery, AddFacebookUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AddFacebookUserQuery, AddFacebookUserQueryVariables>(AddFacebookUserDocument, options);
        }
export type AddFacebookUserQueryHookResult = ReturnType<typeof useAddFacebookUserQuery>;
export type AddFacebookUserLazyQueryHookResult = ReturnType<typeof useAddFacebookUserLazyQuery>;
export type AddFacebookUserQueryResult = Apollo.QueryResult<AddFacebookUserQuery, AddFacebookUserQueryVariables>;