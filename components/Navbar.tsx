"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b border-dashed border-gray-200 flex-shrink-0 fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/acm-logo.png"
                                alt="ACM Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <span className="font-semibold text-lg  text-gray-600">
                                Adani University
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="#about">About Us</NavLink>
                            <NavLink href="#events">Events</NavLink>
                            <NavLink href="#team">Our Team</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                id="mobile-menu"
            >
                <div className="p-4">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                    >
                        <span className="sr-only">Close main menu</span>
                        <X className="h-6 w-6" />
                    </button>
                    <div className="mt-8 flex flex-col space-y-4">
                        <NavLink href="/" onClick={toggleMenu}>
                            Home
                        </NavLink>
                        <NavLink href="#about" onClick={toggleMenu}>
                            About Us
                        </NavLink>
                        <NavLink href="#events" onClick={toggleMenu}>
                            Events
                        </NavLink>
                        <NavLink href="#team" onClick={toggleMenu}>
                            Our Team
                        </NavLink>
                        <NavLink href="#contact" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></div>
            )}
        </nav>
    );
};

const NavLink = ({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <Link
            href={href}
            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out relative group"
            onClick={onClick}
        >
            {children}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
        </Link>
    );
};

export default Navbar;
