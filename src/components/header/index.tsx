import { auth, signOut } from "@auth";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    "use server";
    await signOut();
  };

  return (
    <header className="h-20 w-full">
      <nav className="h-full mr-auto ml-auto flex justify-between container items-center">
        <div>
          <Link href="/" className="text-white	 text-2xl font-semibold">
            NextAuth
          </Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/register" className="text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white">
                  Login
                </Link>
              </li>
            </>
          )}
          {user && (
            <form action={logoutAction} className="flex">
              <li>
                <Link href="/client-side" className="text-white">
                  Client
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/profile" className="text-white">
                  Profile
                </Link>
              </li>
              <li className="ml-4">
                <button>Logout</button>
              </li>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
