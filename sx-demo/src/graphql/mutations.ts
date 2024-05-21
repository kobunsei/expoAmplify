/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserToken = /* GraphQL */ `mutation CreateUserToken(
  $input: CreateUserTokenInput!
  $condition: ModelUserTokenConditionInput
) {
  createUserToken(input: $input, condition: $condition) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserTokenMutationVariables,
  APITypes.CreateUserTokenMutation
>;
export const updateUserToken = /* GraphQL */ `mutation UpdateUserToken(
  $input: UpdateUserTokenInput!
  $condition: ModelUserTokenConditionInput
) {
  updateUserToken(input: $input, condition: $condition) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserTokenMutationVariables,
  APITypes.UpdateUserTokenMutation
>;
export const deleteUserToken = /* GraphQL */ `mutation DeleteUserToken(
  $input: DeleteUserTokenInput!
  $condition: ModelUserTokenConditionInput
) {
  deleteUserToken(input: $input, condition: $condition) {
    id
    userId
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserTokenMutationVariables,
  APITypes.DeleteUserTokenMutation
>;
