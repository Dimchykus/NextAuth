import Header from "@/components/header";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm lg:flex">
          <h1 className="mb-10 text-3xl">Profile</h1>
          <Profile />
        </div>
      </div>
    </>
  );
}
