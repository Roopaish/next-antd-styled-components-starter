/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

import * as types from "./graphql"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\nfragment ProductVariant on ProductVariant{\n  id\n  name\n  assets {\n    id\n    name\n    preview\n  }\n  price\n}\n":
    types.ProductVariantFragmentDoc,
  "\nmutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ... on CurrentUser {\n      id\n      identifier\n    }\n    ... on InvalidCredentialsError {\n      errorCode\n      message\n      authenticationError\n    }\n    ... on NotVerifiedError {\n      errorCode\n      message\n    }\n    ... on NativeAuthStrategyError {\n      errorCode\n      message\n    }\n  }\n}\n":
    types.LoginDocument,
  "\nquery Me {\n  me {\n    id\n    identifier\n  }\n}\n": types.MeDocument,
  "\nquery Product($slug: String) {\n  product(slug: $slug) {\n    id\n    name\n    variants {\n      ...ProductVariant\n    }\n  }\n}\n":
    types.ProductDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nfragment ProductVariant on ProductVariant{\n  id\n  name\n  assets {\n    id\n    name\n    preview\n  }\n  price\n}\n"
): (typeof documents)["\nfragment ProductVariant on ProductVariant{\n  id\n  name\n  assets {\n    id\n    name\n    preview\n  }\n  price\n}\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nmutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ... on CurrentUser {\n      id\n      identifier\n    }\n    ... on InvalidCredentialsError {\n      errorCode\n      message\n      authenticationError\n    }\n    ... on NotVerifiedError {\n      errorCode\n      message\n    }\n    ... on NativeAuthStrategyError {\n      errorCode\n      message\n    }\n  }\n}\n"
): (typeof documents)["\nmutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ... on CurrentUser {\n      id\n      identifier\n    }\n    ... on InvalidCredentialsError {\n      errorCode\n      message\n      authenticationError\n    }\n    ... on NotVerifiedError {\n      errorCode\n      message\n    }\n    ... on NativeAuthStrategyError {\n      errorCode\n      message\n    }\n  }\n}\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nquery Me {\n  me {\n    id\n    identifier\n  }\n}\n"
): (typeof documents)["\nquery Me {\n  me {\n    id\n    identifier\n  }\n}\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nquery Product($slug: String) {\n  product(slug: $slug) {\n    id\n    name\n    variants {\n      ...ProductVariant\n    }\n  }\n}\n"
): (typeof documents)["\nquery Product($slug: String) {\n  product(slug: $slug) {\n    id\n    name\n    variants {\n      ...ProductVariant\n    }\n  }\n}\n"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
