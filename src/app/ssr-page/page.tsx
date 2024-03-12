import SSRContent from "./SSRContent";

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
      <SSRContent txt={txt} />
    </main>
  );
}
