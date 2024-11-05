import { redirect } from "next/navigation"
import { MeDocument } from "@/api/gql/graphql"
import Container from "@/components/ui/container"
import { getClient } from "@/lib/apollo-client"

export default async function ProtectedPage() {
  let d
  try {
    const client = getClient()

    const { data, error } = await (
      await client
    ).query({
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
      <div>Protected Text</div>
      {JSON.stringify(d)}
    </Container>
  )
}
