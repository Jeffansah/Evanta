import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/Evanta-logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36 flex items-center gap-1">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className={`text-3xl font-[600] font-urbanist`}>Evanta</h1>
        </Link>
        <div className="flex w-32 justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
