import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="Home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#38EF7D] to-[#11998E] bg-clip-text text-transparent leading-right">
                        Hi, I'm Youssef Tech
                    </h1>

                    <p className="text-gray-100 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        I'm a Front End developer who loves crafting clean,
                        scalable web applications. My goal is to build solutions
                        that offer both exceptional performance and a delightful
                        user experience.
                    </p>

                    <div className="flex justify-center space-x-4 font-medium">
                        <a
                            href="#Projects"
                            className="bg-green-600 text-white py-3 px-6 rounded-3xl relative overflow-hidden duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-green-500/50"
                        >
                            View Projects
                        </a>
                        <a
                            href="#Contact"
                            className="border-2 border-green-600/50 text-green-600 py-3 px-6 rounded-3xl duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-green-500/50 hover:bg-green-600/70 hover:text-white"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
