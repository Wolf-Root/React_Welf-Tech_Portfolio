import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#Home" className="font-mono font-bold text-3xl text-white">
            Wofl<span className="text-green-500">.Tech</span>
          </a>

          {/* movile menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            &#9776;
          </div>

          {/* disktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            <a href="#Home" className="hover:text-white duration-300">
              Home
            </a>
            <a href="#About" className="hover:text-white duration-300">
              About
            </a>
            <a href="#Projects" className="hover:text-white duration-300">
              Projects
            </a>
            <a href="#Contact" className="hover:text-white duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
