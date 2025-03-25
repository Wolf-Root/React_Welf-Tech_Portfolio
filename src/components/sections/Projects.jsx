import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="Projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 capitalize">
                    <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-[#38EF7D] to-[#11998E] bg-clip-text text-transparent">
                        featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-green-600/50 hover:shadow-md shadow-green-500/50">
                            <h3 className="text-xl font-bold mb-4">
                                cloud platform
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Scalable cloud infrastructure management with
                                real-time monitoring 18 and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-600/10 text-green-600 py-1 px-2 rounded-full cursor-default transition-all hover:bg-green-600/30 hover:shadow-2xs shadow-green-500/50"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href=""
                                    className="text-green-400 transition-all hover:text-green-600 my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-green-600/50 hover:shadow-md shadow-green-500/50">
                            <h3 className="text-xl font-bold mb-4">
                                portfolio
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A Beautiful portfolio.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Tailwind CSS"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-green-600/10 text-green-600 py-1 px-2 rounded-full cursor-default transition-all hover:bg-green-600/30 hover:shadow-2xs shadow-green-500/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href=""
                                    className="text-green-400 transition-all hover:text-green-600 my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-green-600/50 hover:shadow-md shadow-green-500/50">
                            <h3 className="text-xl font-bold mb-4">
                                landing page
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A simple and elegant bookmark manager landing
                                page.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Tailwind CSS"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-green-600/10 text-green-600 py-1 px-2 rounded-full cursor-default transition-all hover:bg-green-600/30 hover:shadow-2xs shadow-green-500/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href=""
                                    className="text-green-400 transition-all hover:text-green-600 my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
