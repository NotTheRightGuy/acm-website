"use client";

import Container from "./Container";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Clear form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <Container>
            <div
                className="flex items-center flex-col pb-12 md:pb-20 -mt-2 md:mt-2 px-4 md:px-0"
                id="contact"
            >
                <h3 className="font-semibold text-xl lg:text-2xl text-[#555]">
                    Get in Touch
                </h3>
                <h1 className="font-bold font-fami lg:text-4xl text-3xl mt-1">
                    Contact Us
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl mt-8 md:mt-12 space-y-4 md:space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subject: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            rows={5}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full font-semibold border-dashed border-blue-500 border-2 py-3 rounded-lg
                                 transform transition-all duration-300  
                                 hover:scale-[102%]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </Container>
    );
}
