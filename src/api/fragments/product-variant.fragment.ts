import { gql } from "@apollo/client"

gql`
  fragment ProductVariant on ProductVariant {
    id
    name
    assets {
      id
      name
      preview
    }
    price
  }
`
