import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    
    const FrontendSkills = ["HTML", "CSS","Tailwind Css" ,"JavaScript", "React"]
    const BackendSkills = ["Python Flask", "SQLite"];

    return (
        <section
            id="About"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-[#38EF7D] to-[#11998E] bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border border-white/10 transition-all hover:-translate-y-1">
                        <p className="text-gray-300 ">
                            Passionate developer with expertise in building
                            scalable web applications and creating innovative
                            solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {FrontendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-600/10 text-green-600 py-1 px-2 rounded-full cursor-default transition-all hover:bg-green-600/30 hover:shadow-2xs shadow-green-500/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {BackendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-600/10 text-green-600 py-1 px-2 rounded-full cursor-default text-sm transition-all hover:bg-green-600/30 hover:shadow-2xs shadow-green-500/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>1337 Programming school</strong> [
                                    2020 - 2024 ]
                                </li>
                                <li>
                                    Relevant Coursework : Frontend Developer,
                                    Backend Developer.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>

                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4>
                                        <strong>freelancer</strong> [ 2020 -
                                        Presnt ]
                                    </h4>
                                    <p>
                                        Frontend And Backend Developer,
                                        <br />
                                        website Optimize,
                                        <br />
                                        SEO Optimize.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}