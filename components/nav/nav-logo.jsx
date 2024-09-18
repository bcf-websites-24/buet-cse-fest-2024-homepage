import Image from "next/image";
import Link from "next/link";

export const NavLogo = () => {
  return (
    <Link href={"/"} className="p-y-2">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={240}
        height={100}
        className="cursor-pointer -ml-8"
      />
    </Link>
  );
};
