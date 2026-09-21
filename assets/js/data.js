/**
 * Ashabul Yeamin Musfir - Portfolio Data Configuration
 * Centralized content source matching the provided design mockups.
 */

const portfolioData = {
  personal: {
    name: "Ashabul Yeamin Musfir",
    role: "Aspiring AI Engineer",
    location: "Dhaka, Bangladesh",
    email: "ashabulyeamin19@gmail.com",
    phone: "+088 1949633877",
    avatar: "./assets/images/profile.png",
    cvFileName: "Ashabul_Yeamin_Musfir_CV.pdf",
    socials: [
      { name: "GitHub", icon: "github", url: "https://github.com/musfir-ds/musfir-ds" },
      { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/ashabul-yeamin-musfir/" },
      { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/ms.musfir" },
      { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/musfir_ig26/" }
    ],
    hero: {
      headingPart1: "AI & Data Science",
      headingHighlight: "Undergraduate",
      bio: "I'm Ashabul Yeamin Musfir, AI & Data Science undergraduate. Eager to leverage academic knowledge and hands-on project experience to contribute to real-world challenges."
    }
  },
  skills: [
    {
      category: "Programming",
      color: "#f5b742",
      items: ["Python", "HTML", "CSS"]
    },
    {
      category: "UI/UX",
      color: "#f5b742",
      items: ["Figma", "Canva"]
    },
    {
      category: "Additional",
      color: "#f5b742",
      items: ["Anchoring", "Teaching", "Office Applications", "LATEX"]
    }
  ],
  education: {
    period: "Oct 2025 – Present",
    degree: "B.Sc. in Artificial Intelligence and Data Science",
    institution: "Green University of Bangladesh",
    cgpa: "3.6 / 4.00",
    fundamentalCourses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Big Data Analytics",
      "Cloud and Data Center",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Ethics and Responsible AI"
    ],
    additionalCourses: ["Engineering Economics", "Engineering Drawing"]
  },
  awards: [
    {
      period: "2026",
      title: "Vice Chancellor's Certificate For Academic Excellence",
      institution: "Green University of Bangladesh",
      description: "Awarded (Spring 2026) for outstanding academic performance; presented by the Vice Chancellor of Green University of Bangladesh."
    }
  ],
  certifications: [
    {
      period: "",
      title: "Python Programming Language Course",
      organization: "IntelliPaat Academy - Instructor: Mrs. Shilpi Jain",
      link: "https://intellipaat.com/academy/certificate-link/?Yz0xNTQzJnU9MzIyNTM5JmV4dD0x",
      description: "Covered fundamentals of programming, problem-solving, and basic project development using Python."
    }
  ],
  contact: {
    tag: "CONTACT",
    title: "Let’s build something useful.",
    description: "For internships, collaboration, or project discussions, reach me through email or LinkedIn.",
    email: "ashabulyeamin19@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/ashabul-yeamin-musfir/"
  }
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}