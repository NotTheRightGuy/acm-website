import Container from "./Container";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamMembers from "@/constants/team";

const MemberCard = ({
    name,
    role,
    image,
    socialLinks,
}: {
    name: string;
    role: string;
    image: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}) => {
    return (
        <div className="flex flex-col items-center group">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="lg:w-48 lg:h-48 w-32 h-32 rounded-full border-4 border-blue-500/20 p-1 transition-all duration-300 group-hover:border-blue-500"
                />
            </div>
            <h3 className="mt-4 text-xl font-bold">{name}</h3>
            <p className="text-gray-600 font-medium">{role}</p>
            <div className="flex gap-4 mt-3">
                {socialLinks.github && (
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                )}
                {socialLinks.linkedin && (
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <FaTwitter size={20} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default function Team() {
    return (
        <Container>
            <div
                className="flex items-center flex-col pb-12 md:pb-20 px-4 md:px-0 lg:mt-0"
                id="team"
            >
                <h3 className="font-semibold text-xl md:text-2xl text-[#555] text-center">
                    Our Team
                </h3>
                <h1 className="font-bold font-fami text-2xl md:text-4xl mt-1 text-center">
                    Meet The Core Team
                </h1>
                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-16">
                    {teamMembers.map((member) => (
                        <MemberCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
