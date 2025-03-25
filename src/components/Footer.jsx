export const Footer = () => {
    return (
        <footer className="bg-black p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 items-center">
                    <a
                        href="#Home"
                        className="font-mono font-bold text-3xl text-white"
                    >
                        Welf<span className="text-green-500">.Tech</span>
                    </a>
                    <p className="text-gray-200">
                        <strong>© Youssef Aboulkaram. </strong> All Rights
                        Reserved.
                    </p>
                </div>
                <div className="flex flex-row gap-4 items-end justify-center text-white">
                    <a
                        href="#Home"
                        className="hover:text-green-600 duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#About"
                        className="hover:text-green-600 duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#Projects"
                        className="hover:text-green-600 duration-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#Contact"
                        className="hover:text-green-600 duration-300"
                    >
                        Contact
                    </a>
                </div>
                <div className="flex flex-row gap-4 items-end justify-center text-white text-2xl">
                    <a href="#" className="hover:text-green-600 duration-300">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:text-green-600 duration-300">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="hover:text-green-600 duration-300">
                        <i class="fa-brands fa-telegram"></i>
                    </a>
                    <a href="#" className="hover:text-green-600 duration-300">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}