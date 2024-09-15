import { MenuList } from "./menu-list";
import { MobileNav } from "./mobile-nav";
import { NavLogo } from "./nav-logo";

export const NavBar = () => {
  return (
    <div className="w-full fixed border-b-2 border-slate-100 h-16 md:h-20 center z-50 bg-white/60 backdrop-blur-lg">
      <div className="container flex items-center justify-between">
        <NavLogo />
        <div className="ml-auto flex items-center">
          <div className="hidden md:block">
            <MenuList />
          </div>

          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};
