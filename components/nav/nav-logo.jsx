import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const NavLogo = ({ className }) => {
  return (
    <Link href={"/"} className="py-2">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={240}
        height={100}
        className={cn("cursor-pointer -ml-8", className)}
      />
    </Link>
  );
};
