import Header from "@/components/header";
import Register from "@/components/register";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Register />
        </div>
      </div>
    </>
  );
}
