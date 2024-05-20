/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserTokenInput = {
  id?: string | null,
  userId: string,
  token: string,
};

export type ModelUserTokenConditionInput = {
  userId?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelUserTokenConditionInput | null > | null,
  or?: Array< ModelUserTokenConditionInput | null > | null,
  not?: ModelUserTokenConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserToken = {
  __typename: "UserToken",
  id: string,
  userId: string,
  token: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserTokenInput = {
  id: string,
  userId?: string | null,
  token?: string | null,
};

export type DeleteUserTokenInput = {
  id: string,
};

export type ModelUserTokenFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  token?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserTokenFilterInput | null > | null,
  or?: Array< ModelUserTokenFilterInput | null > | null,
  not?: ModelUserTokenFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserTokenConnection = {
  __typename: "ModelUserTokenConnection",
  items:  Array<UserToken | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserTokenFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  token?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserTokenFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserTokenFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserTokenMutationVariables = {
  input: CreateUserTokenInput,
  condition?: ModelUserTokenConditionInput | null,
};

export type CreateUserTokenMutation = {
  createUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserTokenMutationVariables = {
  input: UpdateUserTokenInput,
  condition?: ModelUserTokenConditionInput | null,
};

export type UpdateUserTokenMutation = {
  updateUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserTokenMutationVariables = {
  input: DeleteUserTokenInput,
  condition?: ModelUserTokenConditionInput | null,
};

export type DeleteUserTokenMutation = {
  deleteUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserTokenQueryVariables = {
  id: string,
};

export type GetUserTokenQuery = {
  getUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserTokensQueryVariables = {
  filter?: ModelUserTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTokensQuery = {
  listUserTokens?:  {
    __typename: "ModelUserTokenConnection",
    items:  Array< {
      __typename: "UserToken",
      id: string,
      userId: string,
      token: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserTokenSubscriptionVariables = {
  filter?: ModelSubscriptionUserTokenFilterInput | null,
};

export type OnCreateUserTokenSubscription = {
  onCreateUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserTokenSubscriptionVariables = {
  filter?: ModelSubscriptionUserTokenFilterInput | null,
};

export type OnUpdateUserTokenSubscription = {
  onUpdateUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserTokenSubscriptionVariables = {
  filter?: ModelSubscriptionUserTokenFilterInput | null,
};

export type OnDeleteUserTokenSubscription = {
  onDeleteUserToken?:  {
    __typename: "UserToken",
    id: string,
    userId: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
