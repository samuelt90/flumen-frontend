export default async function Home() {
  const res = await fetch("http://127.0.0.1:8000/health", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Flumen</h1>

      <p style={{ marginTop: 12 }}>
        Backend status: <b>{data.status}</b>
      </p>

      <p>
        Service: <b>{data.service}</b>
      </p>
    </main>
  );
}
