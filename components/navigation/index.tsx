import Image from "next/image";
import Link from "next/link";
import { Theme } from "./Theme";
import MobileNavigation from "./MobileNavigation";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12 gap-5 top-0">
      <Link href="/" className="flex items-center gap-1">
        <Image
          width={23}
          height={23}
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="gap-5 flex-between">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
}

export default Navbar;
