import "server-only"

import { cookies } from "next/headers"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

import { API_URL, AUTH_TOKEN_KEY } from "./constants"

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: API_URL,
      // To authorize users using the server side component
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get(AUTH_TOKEN_KEY)?.value}`,
      },
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  })
})

/**
 * Example usage: (in server only)
 * const { data } = await getClient().query({ query: userQuery });
 * Manage authentication from apollo-client.ts
 */
