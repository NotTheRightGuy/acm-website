import Container from "./Container";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 md:py-16 border-t border-dashed px-4 md:px-0">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-1">
                        <h3 className="font-bold text-xl mb-4">
                            ACM Student Chapter
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Empowering students through technology, innovation,
                            and collaborative learning.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500 transition-colors"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Events", "Team", "Contact"].map(
                                (link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-gray-600 hover:text-blue-500 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-xl mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Email: acm@example.com</li>
                            <li>Phone: +91 1234567890</li>
                            <li>Location: Your College Name</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-xl mb-4">Newsletter</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Subscribe to our newsletter for updates.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 md:mt-12 pt-8 border-t text-center text-gray-600 text-sm md:text-base">
                    <p>
                        © {new Date().getFullYear()} ACM Student Chapter. All
                        rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
