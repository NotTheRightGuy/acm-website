import Container from "./Container";
import Marquee from "./ui/marquee";
import MarqueImage from "./MarqueImage";

const images = [
    {
        src: "/1.avif",
        alt: "Image 1",
    },
    {
        src: "/2.avif",
        alt: "Image 2",
    },
    {
        src: "/3.avif",
        alt: "Image 3",
    },
    {
        src: "/4.avif",
        alt: "Image 4",
    },
];

export default function About() {
    return (
        <Container>
            <div className="mt-24" id="about">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h3 className=" font-semibold text-2xl">
                            What is it all about?
                        </h3>
                        <h1 className="font-bold font-fami   text-4xl mt-2">
                            Empowering Students Through Technology and
                            Innovation
                        </h1>
                        <p className="mt-6 text-[#333]">
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
                    <div className="pl-32 h-[500px] overflow-hidden">
                        <Marquee
                            pauseOnHover
                            vertical
                            className="[--duration:20s]"
                        >
                            {images.map((image, index) => (
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
