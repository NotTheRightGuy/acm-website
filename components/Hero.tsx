"use client";
import InteractiveHoverButton from "./ui/interactive-hover-button";

export default function Hero() {
    return (
        <div className="w-full flex-1 px-12">
            <div className="grid lg:grid-cols-2 h-full grid-cols-1">
                <div className="lg:pt-36 pt-12">
                    <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold font-fami leading-snug">
                        Welcome to the Adani University
                        <span className="bg-blue-200 pr-2 mx-2 sm:text-5xl text-3xl border border-dashed border-blue-500">
                            {" "}
                            ACM & ACM-W{" "}
                        </span>
                        Chapter
                    </h1>
                    <p className="lg:text-xl text-sm mt-4 text-[#555]">
                        A dynamic community of students advancing computing
                        through workshops, hackathons, and tech talks. Join us
                        to learn, share, and grow in computer science.
                    </p>
                    <InteractiveHoverButton
                        type="button"
                        className="mt-2 "
                        onClick={() => {
                            window.open(
                                "https://www.acm.org/membership",
                                "_blank"
                            );
                        }}
                        text="Join Now"
                    />
                </div>
                <div className="py-12 h-full w-full ">
                    <img
                        src="/hero-placeholder.avif"
                        alt="Image depicting students participating in Computing activities"
                        className="h-full w-full object-cover border-dashed border-2 border-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}
