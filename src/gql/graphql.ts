/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type AgentProfile = {
  __typename?: 'AgentProfile';
  id: Scalars['ID']['output'];
  properties: Array<Property>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type AuthenticateInput = {
  emailOrPhone: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: Roles;
  userType: TypeUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  Authenticate: User;
  createProperty: Property;
  verifyOTP: User;
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationCreatePropertyArgs = {
  input: PropertyInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type Property = {
  __typename?: 'Property';
  agent: AgentProfile;
  agentId: Scalars['ID']['output'];
  amenities: Array<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['BigInt']['output'];
  roomImages: Array<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type PropertyInput = {
  amenities: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['BigInt']['input'];
  roomImages: Array<Scalars['String']['input']>;
  status: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  agents: Array<AgentProfile>;
};

export enum Role {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum Roles {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum TypeUser {
  Agent = 'AGENT',
  HouseOwner = 'HOUSE_OWNER',
  Tenant = 'TENANT'
}

export type User = {
  __typename?: 'User';
  agentProfile: Array<AgentProfile>;
  createdAt: Scalars['Date']['output'];
  emailOrPhone: Scalars['String']['output'];
  expireTime?: Maybe<Scalars['BigInt']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  role: Roles;
  sessionId?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userType: TypeUser;
};

export enum UserType {
  Agent = 'AGENT',
  HouseOwner = 'HOUSE_OWNER',
  Tenant = 'TENANT'
}

export type VerifyOtpInput = {
  id: Scalars['Int']['input'];
  otp: Scalars['String']['input'];
};

export type InfoSectionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type InfoSectionQueryQuery = { __typename?: 'Query', agents: Array<{ __typename?: 'AgentProfile', properties: Array<{ __typename?: 'Property', name: string }>, user: { __typename?: 'User', emailOrPhone: string, lastName?: string | null, sessionId?: string | null } }> };


export const InfoSectionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InfoSectionQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailOrPhone"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}}]}}]}}]}}]} as unknown as DocumentNode<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>;