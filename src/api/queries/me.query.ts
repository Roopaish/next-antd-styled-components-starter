import { gql } from "@apollo/client"

gql`
  query Me {
    me {
      id
      identifier
    }
  }
`
