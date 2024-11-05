import { ProductDocument } from "@/api/gql/graphql"
import { getClient } from "@/lib/apollo-client"
import { Button, Card } from "antd"

export default async function SSRPage() {
  const client = getClient()
  const { data, error } = await (
    await client
  ).query({
    query: ProductDocument,
    variables: {
      slug: "laptop",
    },
  })

  if (error) {
    return <>Error</>
  }

  return (
    <main>
      <section
        style={{
          textAlign: "center",
          marginTop: 48,
          marginBottom: 40,
          padding: 100,
        }}
      >
        <h1>Laptop rendered in server</h1>
        <Card>{JSON.stringify(data)}</Card>
        <Button type="primary">Button</Button>
      </section>
    </main>
  )
}
