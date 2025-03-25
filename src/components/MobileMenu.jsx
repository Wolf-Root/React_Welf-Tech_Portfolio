export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
                ${
                    menuOpen
                        ? "h-1/2 opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <div className="flex flex-col text-xl text-white font-semibold space-y-4 transform transition-transform duration-300">
                <a
                    href="#Home"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-500 duration-300"
                >
                    Home
                </a>
                <a
                    href="#About"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-500 duration-300"
                >
                    About
                </a>
                <a
                    href="#Projects"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-500 duration-300"
                >
                    Projects
                </a>
                <a
                    href="#Contact"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-green-500 duration-300"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};
