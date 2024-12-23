const teamMembers = [
    {
        name: "Janmejay Chatterjee",
        role: "ACM Student Chair",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrVijayKumar",
        socialLinks: {
            linkedin: "https://linkedin.com/in/vijaykumar",
        },
    },
    {
        name: "Devvrat Singh Rathod",
        role: "ACM Student Vice Char",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AdityaSharma",
        socialLinks: {
            github: "https://github.com/aditya",
            linkedin: "https://linkedin.com/in/aditya",
        },
    },
    {
        name: "Paras Shah",
        role: "Vice Chairperson",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RiyaPatel",
        socialLinks: {
            linkedin: "https://linkedin.com/in/riya",
            github: "https://github.com/riya",
        },
    },
    {
        name: "Shrey Shah",
        role: "Technical Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunMehta",
        socialLinks: {
            github: "https://github.com/arjun",
            linkedin: "https://linkedin.com/in/arjun",
        },
    },
    {
        name: "Dev Sanghavi",
        role: "Event Coordinator",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaSingh",
        socialLinks: {
            linkedin: "https://linkedin.com/in/priya",
            twitter: "https://twitter.com/priya",
        },
    },
    {
        name: "Harshita Bhambhani",
        role: "Web Master",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevPatel",
        socialLinks: {
            github: "https://github.com/dev",
            linkedin: "https://linkedin.com/in/dev",
        },
    },
    {
        name: "Nidhi Bolia",
        role: "Content Lead",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnanyaRoy",
        socialLinks: {
            linkedin: "https://linkedin.com/in/ananya",
            twitter: "https://twitter.com/ananya",
        },
    },
    {
        name: "Khushi Bansal",
        role: "Design Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RohanVerma",
        socialLinks: {
            github: "https://github.com/rohan",
            linkedin: "https://linkedin.com/in/rohan",
        },
    },
    {
        name: "Ananya Sanghavi",
        role: "Design Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RohanVerma",
        socialLinks: {
            github: "https://github.com/rohan",
            linkedin: "https://linkedin.com/in/rohan",
        },
    },
    {
        name: "Vidhi Patel",
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
