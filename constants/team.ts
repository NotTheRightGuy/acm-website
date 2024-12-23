const teamMembers = [
    {
        name: "Dr. Vijay Kumar",
        role: "Faculty Advisor",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrVijayKumar",
        socialLinks: {
            linkedin: "https://linkedin.com/in/vijaykumar",
        },
    },
    {
        name: "Aditya Sharma",
        role: "Chairperson",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AdityaSharma",
        socialLinks: {
            github: "https://github.com/aditya",
            linkedin: "https://linkedin.com/in/aditya",
        },
    },
    {
        name: "Riya Patel",
        role: "Vice Chairperson",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RiyaPatel",
        socialLinks: {
            linkedin: "https://linkedin.com/in/riya",
            github: "https://github.com/riya",
        },
    },
    {
        name: "Arjun Mehta",
        role: "Technical Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunMehta",
        socialLinks: {
            github: "https://github.com/arjun",
            linkedin: "https://linkedin.com/in/arjun",
        },
    },
    {
        name: "Priya Singh",
        role: "Event Coordinator",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaSingh",
        socialLinks: {
            linkedin: "https://linkedin.com/in/priya",
            twitter: "https://twitter.com/priya",
        },
    },
    {
        name: "Dev Patel",
        role: "Web Master",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevPatel",
        socialLinks: {
            github: "https://github.com/dev",
            linkedin: "https://linkedin.com/in/dev",
        },
    },
    {
        name: "Ananya Roy",
        role: "Content Lead",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnanyaRoy",
        socialLinks: {
            linkedin: "https://linkedin.com/in/ananya",
            twitter: "https://twitter.com/ananya",
        },
    },
    {
        name: "Rohan Verma",
        role: "Design Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RohanVerma",
        socialLinks: {
            github: "https://github.com/rohan",
            linkedin: "https://linkedin.com/in/rohan",
        },
    },
].map((member) => ({
    ...member,
    image:
        member.image ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name.replace(
            /\s+/g,
            ""
        )}`,
}));

export default teamMembers;
