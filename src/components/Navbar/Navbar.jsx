import Link from "next/link";
import { Heart, ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <Image
              src={logo}
              alt="Fresh Harvests"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-gray-800 font-semibold text-lg md:text-2xl">
              Fresh Harvests
            </h2>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/favorites"
              className="text-gray-600 hover:text-gray-900 hidden lg:flex items-center"
            >
              <Heart
                className="w-6 h-6 text-primary"
                fill="rgb(116, 155, 63)"
              />
              <span className="ml-1">Favorites</span>
            </Link>
            <Link href="/cart" className="text-text flex items-center gap-2">
              <ShoppingCart
                className="w-6 h-6 text-primary"
                fill="rgb(116, 155, 63)"
              />
              <span className="bg-red-500 text-white text-xs rounded-full min-w-5 min-h-5 aspect-square flex items-center justify-center -mt-3 -ml-3">
                50
              </span>
              <span className="ml-1 hidden lg:block">Cart</span>
            </Link>
            <button className="hidden lg:block border border-heading py-3 px-6 rounded-md text-heading font-semibold text-sm font-rubik hover:bg-primary hover:text-white hover:border-primary transition-colors">
              Sign In
            </button>
            <label htmlFor="menu-toggle" className="lg:hidden cursor-pointer">
              <Menu className="w-6 h-6" />
            </label>
          </div>
        </div>

        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <div className="hidden peer-checked:block !lg:hidden absolute left-0 right-0 bg-white py-4">
          <div className="flex lg:hidden flex-col space-y-4 px-4 items-center">
            <NavLinks />
            <Link
              href="/favorites"
              className="text-gray-600 hover:text-gray-900 items-center flex"
            >
              <Heart
                className="w-6 h-6 text-primary"
                fill="rgb(116, 155, 63)"
              />
              <span className="ml-1">Favorites</span>
            </Link>
            <button className="border border-heading py-3 px-6 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
