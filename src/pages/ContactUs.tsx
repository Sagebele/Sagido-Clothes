import { useState } from "react";
import FooterHome from "../components/HomePage/FooterHome";
import "../styles/Form.css";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // TODO: Send formData to PHP backend API
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>  
            <section className="relative min-h-screen w-full overflow-hidden">
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src={"https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Hero background"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />

            <div className="relative z-10 min-h-screen flex items-center justify-center w-max-7xl mx-auto m-4">
                <form 
                onSubmit={handleSubmit}
                className="w-full p-20 max-w-4xl bg-black/60 rounded-sm shadow-lg mt-10">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-3xl font-bold text-white drop-shadow-lg text-center">
                            Contact Us
                        </h2>
                        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-2xl">
                            We'd love to hear from you! Whether you have questions, feedback, or something wrong with your order, our team is here to help.
                        </p>
                    </div>
                    <div className="mt-8 space-y-4">
                        <div className="contactNameContainer">
                            <label className="contactLabel text-white mb-2" 
                            htmlFor="name">
                                Name
                            </label>
                            <input className="contactName w-full p-2 " 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="contactEmailContainer">
                            <label className="contactLabel text-white mb-2" 
                            htmlFor="email">
                                Email
                            </label>
                            <input className="contactEmail w-full p-2 " 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="contactMessageContainer">
                            <label className="contactLabel text-white mb-2" 
                            htmlFor="message">
                                Message
                            </label>
                            <textarea className="contactMessage w-full p-2" 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5} 
                            required>
                            </textarea>
                        </div>
                        <div className="contactButton flex justify-center">
                            <button className="bg-zinc-900 text-white px-4 py-2 rounded-md  hover:bg-zinc-700 cursor-pointer transition " 
                                type="submit">
                                Send Message
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </section>
        <FooterHome />
    </>
    );
}

