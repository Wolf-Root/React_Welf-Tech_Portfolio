export const Footer = () => {
  return (
    <footer className="bg-black p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4 items-center">
          <a href="#Home" className="font-mono font-bold text-3xl text-white">
            Wolf<span className="text-green-500">.Tech</span>
          </a>
          <p className="text-gray-200">
            <strong>© Wolf-Root. </strong> All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-row gap-4 items-end justify-center text-white">
          <a href="#Home" className="hover:text-green-600 duration-300">
            Home
          </a>
          <a href="#About" className="hover:text-green-600 duration-300">
            About
          </a>
          <a href="#Projects" className="hover:text-green-600 duration-300">
            Projects
          </a>
          <a href="#Contact" className="hover:text-green-600 duration-300">
            Contact
          </a>
        </div>
        <div className="flex flex-row gap-4 items-end justify-center text-white text-2xl">
          <a href="https://x.com/wolf_R00T" target="_blank" rel="noopener" className="hover:text-green-500 duration-300">
            <i class="fa-brands fa-x-twitter" />
          </a>
          <a
            href="https://linkedin.com/in/youssef0110"
            target="_blank"
            rel="noopener"
            className="hover:text-green-500 duration-300"
          >
            <i class="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/Wolf-Root" target="_blank" rel="noopener" className="hover:text-green-500 duration-300">
            <i class="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
};
