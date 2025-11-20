import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <main>
      {/* <h1>Hello world: {session.user.email}</h1>
      <h1 className="font-space-grotesk">Hello world</h1> */}

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </main>
  );
};

export default Home;
