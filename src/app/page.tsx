import Header from "@/components/header";
import { auth } from "@auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Main
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </main>
    </>
  );
}
