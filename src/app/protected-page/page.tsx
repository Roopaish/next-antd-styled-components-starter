import { redirect } from "next/navigation"
import { MeDocument } from "@/api/gql/graphql"
import Container from "@/components/ui/container"
import { Heading } from "@/components/ui/text"
import { getClient } from "@/lib/apollo-client"

export default async function ProtectedPage() {
  let d
  try {
    const client = getClient()

    const { data, error } = await client.query({
      query: MeDocument,
    })

    d = data

    if (!data?.me?.id) {
      redirect("/login")
    }
  } catch (e) {
    redirect("/login")
  }

  return (
    <Container>
      <Heading>Protected Text</Heading>
      {JSON.stringify(d)}
    </Container>
  )
}
