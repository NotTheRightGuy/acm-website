import Container from "./Container";
import Marquee from "./ui/marquee";
import MarqueImage from "./MarqueImage";
import { aboutImage } from "@/constants/about";

export default function About() {
    return (
        <Container>
            <div className="mt-12 md:mt-24" id="about">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="px-4 md:px-0">
                        <h3 className="font-semibold text-xl md:text-2xl">
                            What is it all about?
                        </h3>
                        <h1 className="font-bold font-fami text-3xl md:text-4xl mt-2">
                            Empowering Students Through Technology and
                            Innovation
                        </h1>
                        <p className="mt-4 md:mt-6 text-[#333] text-sm md:text-base">
                            The ACM Student Chapter at our institution is a
                            dynamic hub for technology enthusiasts. We foster
                            learning through hands-on workshops, expert-led
                            sessions, and competitive programming challenges.
                            Our chapter emphasizes peer learning, industry
                            connections, and practical skill development in
                            computer science. We organize regular coding
                            competitions, technical seminars, and collaborative
                            projects to help students stay current with industry
                            trends and build a strong foundation in computing.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                    <span className="text-white">✓</span>
                                </div>
                                <span className="text-[#333]">
                                    Technical Workshops and Hands-on Sessions
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                    <span className="text-white">✓</span>
                                </div>
                                <span className="text-[#333]">
                                    Industry Expert Interactions
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                    <span className="text-white">✓</span>
                                </div>
                                <span className="text-[#333]">
                                    Competitive Programming Events
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-32 hidden lg:block h-[500px] overflow-hidden ">
                        <Marquee
                            vertical
                            pauseOnHover
                            className="[--duration:20s]"
                        >
                            {aboutImage.map((image, index) => (
                                <MarqueImage
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </Container>
    );
}
