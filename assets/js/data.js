/**
 * Ashabul Yeamin Musfir - Centralized Portfolio Data Store
 * Modeled after and styled to match monmoy.pages.dev
 */

const portfolioData = {
  personal: {
    name: "Ashabul Yeamin Musfir",
    role: "Aspiring AI Engineer",
    location: "Dhaka, Bangladesh",
    email: "ashabulyeamin19@gmail.com",
    phone: "+088 1949633877",
    avatar: "./assets/images/profile.png",
    cvUrl: "#cv-modal",
    hero: {
      headlinePrefix: "AI & Data Science",
      headlineHighlight: "Undergraduate",
      bio: "I’m Ashabul Yeamin Musfir, an AI & Data Science undergraduate at Green University of Bangladesh. Focused on building real-world machine learning solutions, predictive models, deep learning pipelines, and data-driven intelligent systems."
    },
    socials: [
      {
        title: "GitHub: @musfir-ds",
        name: "GitHub",
        href: "https://github.com/musfir-ds/musfir-ds",
        svg: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`
      },
      {
        title: "LinkedIn: @ashabul-yeamin-musfir",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ashabul-yeamin-musfir/",
        svg: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
      },
      {
        title: "Facebook: @ms.musfir",
        name: "Facebook",
        href: "https://www.facebook.com/ms.musfir",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" height="18px" width="18px" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2H9.5C7.57 2 6 3.57 6 5.5V8H3.5v3H6v5.5h3v-5.5h2.5L12 8H9V5.5c0-.28.22-.5.5-.5h2V2z"></path></svg>`
      },
      {
        title: "Instagram: @musfir_ig26",
        name: "Instagram",
        href: "https://www.instagram.com/musfir_ig26/",
        svg: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`
      }
    ]
  },
  education: [
    {
      title: "Bachelor of Science in Artificial Intelligence and Data Science",
      date: "Oct 2025 – Present",
      org: "Green University of Bangladesh",
      bullets: [
        "CGPA: 3.6 / 4.00",
        "Fundamental Courses: Artificial Intelligence, Machine Learning, Big Data Analytics, Deep Learning, Natural Language Processing (NLP), Cloud & Data Center, Ethics and Responsible AI.",
        "Additional Courses: Engineering Economics, Engineering Drawing."
      ]
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "HTML", "CSS"]
    },
    {
      category: "UI/UX",
      items: ["Figma", "Canva"]
    },
    {
      category: "Additional",
      items: ["Anchoring", "Teaching", "Office Applications", "LATEX"]
    }
  ],
  awards: [
    {
      title: "Vice Chancellor's Certificate For Academic Excellence",
      date: "2026",
      org: "Green University of Bangladesh",
      bullets: [
        "Awarded (Spring 2026) for outstanding academic performance; presented by the Vice Chancellor of Green University of Bangladesh."
      ]
    }
  ],
  certifications: [
    {
      title: "Python Programming Language Course",
      date: "Certified",
      issuer: "IntelliPaat Academy - Instructor: Mrs. Shilpi Jain",
      credUrl: "https://intellipaat.com/academy/certificate-link/?Yz0xNTQzJnU9MzIyNTM5JmV4dD0x",
      description: "Covered fundamentals of programming, algorithmic problem-solving, and basic development using Python."
    }
  ],
  contact: {
    tag: "CONTACT",
    title: "Let’s build something useful.",
    description: "For internships, research collaboration, or technical discussions, reach me through email or LinkedIn.",
    email: "ashabulyeamin19@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/ashabul-yeamin-musfir/"
  }
};

if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}