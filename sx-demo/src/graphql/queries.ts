/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserToken = /* GraphQL */ `query GetUserToken($id: ID!) {
  getUserToken(id: $id) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserTokenQueryVariables,
  APITypes.GetUserTokenQuery
>;
export const listUserTokens = /* GraphQL */ `query ListUserTokens(
  $filter: ModelUserTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      token
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserTokensQueryVariables,
  APITypes.ListUserTokensQuery
>;
