import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../public/assets/icons/Evanta-logo.png";
import { Separator } from "../ui/separator";
import Link from "next/link";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden ml-4">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.png"}
            width={30}
            height={30}
            alt="menu toggler"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-white gap-6 md:hidden">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={50} />
            <h1 className={`text-3xl font-[600] font-urbanist`}>Evanta</h1>
          </Link>

          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
