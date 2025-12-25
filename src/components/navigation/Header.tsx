import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-card-top-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
}

export default Header;

