import * as Types from '../../../../../../gql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthenticateMutaionMutationVariables = Types.Exact<{
  emailOrPhone: Types.Scalars['String']['input'];
  firstName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  userType: Types.TypeUser;
}>;


export type AuthenticateMutaionMutation = { __typename?: 'Mutation', Authenticate: { __typename?: 'User', emailOrPhone: string, id: string } };


export const AuthenticateMutaionDocument = gql`
    mutation AuthenticateMutaion($emailOrPhone: String!, $firstName: String, $userType: TypeUser!) {
  Authenticate(
    input: {emailOrPhone: $emailOrPhone, firstName: $firstName, userType: $userType}
  ) {
    emailOrPhone
    id
  }
}
    `;
export type AuthenticateMutaionMutationFn = Apollo.MutationFunction<AuthenticateMutaionMutation, AuthenticateMutaionMutationVariables>;
export function useAuthenticateMutaionMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateMutaionMutation, AuthenticateMutaionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticateMutaionMutation, AuthenticateMutaionMutationVariables>(AuthenticateMutaionDocument, options);
      }
export type AuthenticateMutaionMutationHookResult = ReturnType<typeof useAuthenticateMutaionMutation>;
export type AuthenticateMutaionMutationResult = Apollo.MutationResult<AuthenticateMutaionMutation>;
export type AuthenticateMutaionMutationOptions = Apollo.BaseMutationOptions<AuthenticateMutaionMutation, AuthenticateMutaionMutationVariables>;