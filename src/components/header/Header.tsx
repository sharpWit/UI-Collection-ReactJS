import Link from "next/link";
import Navigation from "./Navigation";
import { Ampersands } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col space-y-2 w-full max-h-[90px] h-full p-1 bg-slate-300 fixed">
      <div className="container">
        {/* Logo */}
        <div>
          <Link href="/">
            <Ampersands color="red" size={48} />
          </Link>
        </div>
      </div>
      {/* Navigation */}
      <Navigation />
    </header>
  );
};
export default Header;
