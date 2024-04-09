import { gql } from "@apollo/client"

gql`
  query Product($slug: String) {
    product(slug: $slug) {
      id
      name
      variants {
        ...ProductVariant
      }
    }
  }
`
