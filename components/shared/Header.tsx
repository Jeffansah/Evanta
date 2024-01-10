import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/Evanta-logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between md:px-6">
        <Link href={"/"} className="w-36 flex items-center gap-1">
          <Image src={logo} alt="logo" width={38} height={38} />
          <h1 className={`text-2xl font-[600] font-urbanist`}>Evanta</h1>
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
        <div className="flex w-32 justify-end">
          <SignedOut>
            <Button asChild className="rounded-full mr-4" size="lg">
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
          </SignedOut>
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
