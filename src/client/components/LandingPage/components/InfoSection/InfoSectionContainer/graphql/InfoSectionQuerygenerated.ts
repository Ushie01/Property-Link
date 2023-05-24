import * as Types from '../../../../../../../gql/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type InfoSectionQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type InfoSectionQueryQuery = { __typename?: 'Query', agents: Array<{ __typename?: 'AgentProfile', properties: Array<{ __typename?: 'Property', name: string }>, user: { __typename?: 'User', emailOrPhone: string, lastName?: string | null, firstName?: string | null, sessionId?: string | null } }> };


export const InfoSectionQueryDocument = gql`
    query InfoSectionQuery {
  agents {
    properties {
      name
    }
  }
  agents {
    user {
      emailOrPhone
      lastName
      firstName
      sessionId
    }
  }
}
    `;
export function useInfoSectionQueryQuery(baseOptions?: Apollo.QueryHookOptions<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>(InfoSectionQueryDocument, options);
      }
export function useInfoSectionQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>(InfoSectionQueryDocument, options);
        }
export type InfoSectionQueryQueryHookResult = ReturnType<typeof useInfoSectionQueryQuery>;
export type InfoSectionQueryLazyQueryHookResult = ReturnType<typeof useInfoSectionQueryLazyQuery>;
export type InfoSectionQueryQueryResult = Apollo.QueryResult<InfoSectionQueryQuery, InfoSectionQueryQueryVariables>;