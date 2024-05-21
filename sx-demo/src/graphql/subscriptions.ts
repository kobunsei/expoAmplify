/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserToken = /* GraphQL */ `subscription OnCreateUserToken($filter: ModelSubscriptionUserTokenFilterInput) {
  onCreateUserToken(filter: $filter) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserTokenSubscriptionVariables,
  APITypes.OnCreateUserTokenSubscription
>;
export const onUpdateUserToken = /* GraphQL */ `subscription OnUpdateUserToken($filter: ModelSubscriptionUserTokenFilterInput) {
  onUpdateUserToken(filter: $filter) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserTokenSubscriptionVariables,
  APITypes.OnUpdateUserTokenSubscription
>;
export const onDeleteUserToken = /* GraphQL */ `subscription OnDeleteUserToken($filter: ModelSubscriptionUserTokenFilterInput) {
  onDeleteUserToken(filter: $filter) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserTokenSubscriptionVariables,
  APITypes.OnDeleteUserTokenSubscription
>;
