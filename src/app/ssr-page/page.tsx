import { Button } from "antd";

async function getSomethingFromServer(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Text from Server");
    }, 1000);
  });
}

export default async function SSRPage() {
  const txt = await getSomethingFromServer();

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
        <Button type="primary">{txt}</Button>
      </section>
    </main>
  );
}
