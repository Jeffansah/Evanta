import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/Evanta-logo.png";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex justify-between items-center max-md:flex-col max-md:gap-4 text-center p-5 md:px-6">
        <Link href={"/"} className="w-36 flex items-center gap-1">
          <Image src={logo} alt="logo" width={38} height={38} />
          <h1 className={`text-2xl font-[600] font-urbanist`}>Evanta</h1>
        </Link>
        <p className="text-sm font-light">{year} Evanta. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
