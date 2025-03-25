import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const serviceID = "service_fpct9za";
    const templateID = "template_y4mniih";
    const userID = "6coC5tdelu-C1E7Bt";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                alert("Message Send !");
                setformData({name: "", email: "", message:""})
            })
            .catch(() =>
                alert("Oops! Something Went Wrong. Please Try Again.")
            );
    };

    return (
        <section
            id="Contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-5xl text-center font-bold mb-8 bg-gradient-to-r from-[#38EF7D] to-[#11998E] bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-600 focus:bg-green-600/10"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setformData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-600 focus:bg-green-600/10"
                                placeholder="example@email.com"
                                onChange={(e) =>
                                    setformData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-green-600 focus:bg-green-600/10"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setformData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-6 rounded font-medium cursor-pointer relative transition overflow-hidden hover:-translate-y-0.5 hover:shadow-lg shadow-green-500/50"
                        >
                            Sand message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
