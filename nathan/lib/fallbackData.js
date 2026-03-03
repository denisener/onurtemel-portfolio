// ============================================================
// Fallback Verisi — Sanity CMS bağlanmadan önce kullanılır
// CMS bağlandıktan sonra bu dosya devre dışı kalır
// ============================================================

export const fallbackProjects = [
  {
    _id: "1",
    title: "Adidas",
    slug: { current: "adidas" },
    coverImage: "images/works/1.webp",
    category: "E-COMMERCE WEBSITE",
    year: "2024",
    projectType: "photo",
    featured: true,
    overview:
      "A comprehensive e-commerce redesign project focusing on modern UI patterns and seamless checkout experience.",
    objectives: [
      "Modernize the overall design",
      "Improve conversion rates",
      "Enhance mobile experience",
    ],
    gallery: [
      { imagePath: "images/works/1.webp", alt: "Adidas Homepage", caption: "Homepage Redesign" },
    ],
    videos: [],
    testimonial: {
      quote: "The new design exceeded our expectations and boosted our online sales significantly.",
      name: "Marketing Team",
      role: "Adidas Digital",
    },
  },
  {
    _id: "2",
    title: "WWF",
    slug: { current: "wwf" },
    coverImage: "images/works/2.webp",
    category: "CUSTOM WEBSITE DESIGN",
    year: "2023",
    projectType: "photo",
    featured: true,
    overview:
      "Custom website design for WWF focusing on environmental awareness and donation engagement.",
    objectives: [
      "Create engaging environmental storytelling",
      "Boost donation conversions",
      "Mobile-first design approach",
    ],
    gallery: [
      { imagePath: "images/works/2.webp", alt: "WWF Website", caption: "Main Landing" },
    ],
    videos: [],
    testimonial: {
      quote: "The website beautifully communicates our mission and has increased engagement.",
      name: "Communications Director",
      role: "WWF International",
    },
  },
  {
    _id: "3",
    title: "Honda",
    slug: { current: "honda" },
    coverImage: "images/works/3.webp",
    category: "FRONT-END DEVELOPMENT",
    year: "2022",
    projectType: "video",
    featured: true,
    overview:
      "Front-end development project with interactive video showcases for Honda's new vehicle lineup.",
    objectives: [
      "Interactive 3D vehicle previews",
      "Video-driven product stories",
      "Performance optimization",
    ],
    gallery: [],
    videos: [
      {
        title: "Honda Campaign Video",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailPath: "images/works/3.webp",
        duration: "2:30",
      },
    ],
    testimonial: {
      quote: "The interactive experience brought our vehicles to life online.",
      name: "Digital Marketing Lead",
      role: "Honda Motors",
    },
  },
  {
    _id: "4",
    title: "Uniqlo",
    slug: { current: "uniqlo" },
    coverImage: "images/works/4.webp",
    category: "Social Media Integration",
    year: "2021",
    projectType: "mixed",
    featured: false,
    overview:
      "Uniqlo is a well-established e-commerce retailer specializing in contemporary fashion. The brand has a significant presence on social media platforms.",
    objectives: [
      "Boost Website Traffic from Social Media",
      "Enhance Customer Engagement and Interaction",
      "Increase Customer Retention and Repeat Purchases",
      "Strengthen Brand Loyalty and Advocacy",
      "Improve SEO and Search Engine Rankings",
      "Expand Brand Reach and Audience",
    ],
    gallery: [
      {
        imagePath: "images/work-single/1.webp",
        alt: "Uniqlo Social Integration",
        caption: "Social Media Integration",
      },
      {
        imagePath: "images/work-single/2.webp",
        alt: "Uniqlo Campaign",
        caption: "Social Media Integration",
      },
    ],
    videos: [
      {
        title: "Uniqlo Social Campaign",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailPath: "",
        duration: "1:45",
      },
    ],
    testimonial: {
      quote:
        "Integrating social media into our website has been a game-changer for Uniqlo.",
      name: "Sarah Johnson",
      role: "Marketing Director, Uniqlo",
    },
  },
  {
    _id: "5",
    title: "Playstation",
    slug: { current: "playstation" },
    coverImage: "images/works/5.webp",
    category: "Website Optimization",
    year: "2020",
    projectType: "video",
    featured: false,
    overview:
      "Performance optimization and video content integration for Playstation's gaming platform.",
    objectives: [
      "Optimize page load times",
      "Integrate game trailers seamlessly",
      "Improve user engagement metrics",
    ],
    gallery: [],
    videos: [
      {
        title: "Playstation Showcase",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailPath: "images/works/5.webp",
        duration: "3:20",
      },
    ],
    testimonial: {
      quote: "Our website performance improved dramatically with the optimization work.",
      name: "Tech Lead",
      role: "Playstation Digital",
    },
  },
  {
    _id: "6",
    title: "Wilson",
    slug: { current: "wilson" },
    coverImage: "images/works/6.webp",
    category: "Landing Page Design",
    year: "2019",
    projectType: "photo",
    featured: false,
    overview:
      "High-conversion landing page design for Wilson's sports equipment campaigns.",
    objectives: [
      "Maximize campaign conversions",
      "Clean, sports-focused aesthetic",
      "A/B testing ready templates",
    ],
    gallery: [
      { imagePath: "images/works/6.webp", alt: "Wilson Landing Page", caption: "Campaign Landing" },
    ],
    videos: [],
    testimonial: {
      quote: "The landing pages delivered exceptional conversion rates for our campaigns.",
      name: "Brand Manager",
      role: "Wilson Sporting Goods",
    },
  },
];

export const fallbackPersonalInfo = {
  name: "NATHAN",
  title: "A Website Designer from New York",
  subtitle: "Available for Work",
  aboutTitle:
    "Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality.",
  bio1: "Hi there! I'm Nathan, a web designer with a passion for creating exceptional digital experiences. With over 15 years in the industry, I have skills in designing websites that are not only visually appealing but also functional and user-friendly.",
  bio2: "I specialize in crafting bespoke websites using the latest technologies and design trends, including HTML5, CSS3, JavaScript, and popular content management systems like WordPress, Joomla, and Shopify.",
  profileImage: "images/misc/1.webp",
  availableForWork: true,
  stats: [
    { label: "Hours of Works", value: 8240 },
    { label: "Projects Done", value: 315 },
    { label: "Satisfied Customers", value: 250 },
    { label: "Awards Winning", value: 32 },
  ],
};

export const fallbackServices = [
  { _id: "s1", title: "Custom Website Design", description: "Tailored websites to match your brand's unique identity and goals.", order: 1 },
  { _id: "s2", title: "E-commerce Website", description: "Creating user-friendly online stores with secure payment gateways.", order: 2 },
  { _id: "s3", title: "Landing Page Design", description: "High-conversion landing pages for specific marketing campaigns.", order: 3 },
  { _id: "s4", title: "Front-end Development", description: "Implementing designs with clean and efficient code using HTML, CSS, JS.", order: 4 },
  { _id: "s5", title: "Back-end Development", description: "Building robust back-end systems using technologies like PHP and databases.", order: 5 },
  { _id: "s6", title: "Content Management System", description: "Integrating and customizing CMS platforms for easy content management.", order: 6 },
];

export const fallbackTestimonials = [
  {
    _id: "t1",
    name: "John Reynolds",
    role: "CEO of Boutique Bliss",
    quote: "Our e-commerce website needed a complete overhaul, and Nathan delivered beyond our expectations. The new design is visually stunning and incredibly user-friendly.",
    avatar: "images/testimonial/1.webp",
    order: 1,
  },
  {
    _id: "t2",
    name: "David Kim",
    role: "Freelance Photographer",
    quote: "Nathan helped me design a personal portfolio website that truly highlights my work as a photographer. The site is clean, modern, and visually appealing – exactly what I wanted.",
    avatar: "images/testimonial/2.webp",
    order: 2,
  },
  {
    _id: "t3",
    name: "Dr. Robert Harris",
    role: "Founder of Harris Clinic",
    quote: "The new site is not only visually appealing but also highly functional, with easy navigation for our patients. The online appointment booking system has been a game-changer.",
    avatar: "images/testimonial/3.webp",
    order: 3,
  },
];

export const fallbackSkills = [
  { _id: "sk1", name: "Figma", logo: "images/logo/figma.webp", skillType: "tool", order: 1 },
  { _id: "sk2", name: "Photoshop", logo: "images/logo/photoshop.webp", skillType: "tool", order: 2 },
  { _id: "sk3", name: "Sketch", logo: "images/logo/sketch.webp", skillType: "tool", order: 3 },
  { _id: "sk4", name: "Adobe XD", logo: "images/logo/xd.webp", skillType: "tool", order: 4 },
  { _id: "sk5", name: "HTML", percentage: 80, skillType: "coding", order: 5 },
  { _id: "sk6", name: "CSS", percentage: 70, skillType: "coding", order: 6 },
  { _id: "sk7", name: "BOOTSTRAP", percentage: 82, skillType: "coding", order: 7 },
  { _id: "sk8", name: "JAVASCRIPT", percentage: 62, skillType: "coding", order: 8 },
  { _id: "sk9", name: "PHP", percentage: 90, skillType: "coding", order: 9 },
  { _id: "sk10", name: "REACT", percentage: 85, skillType: "coding", order: 10 },
];

export const fallbackEducation = [
  { _id: "e1", year: "2018", degree: "Master in Design", school: "New York University" },
  { _id: "e2", year: "2014", degree: "Bachelor of Arts", school: "University of London" },
  { _id: "e3", year: "2011", degree: "Artist of College", school: "University of Sydney" },
];

export const fallbackExperience = [
  { _id: "ex1", period: "2022 – Present", title: "Lead Website Designer", company: "Tech Solutions Inc" },
  { _id: "ex2", period: "2018 - 2022", title: "Mid-Level Website Designer", company: "Creativo Web Agency" },
  { _id: "ex3", period: "2016 - 2018", title: "Junior Website Designer", company: "Rocket Web Services" },
];

export const fallbackBlogPosts = [
  { _id: "b1", title: "Mastering Modern Web Design: Trends and Techniques for 2024", slug: { current: "mastering-modern-web-design" }, coverImage: "images/blog/1.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
  { _id: "b2", title: "The Future of Web Development: Emerging Technologies to Watch", slug: { current: "future-of-web-development" }, coverImage: "images/blog/2.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
  { _id: "b3", title: "Optimizing Website Performance: Strategies for Faster Load Times", slug: { current: "optimizing-website-performance" }, coverImage: "images/blog/3.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
  { _id: "b4", title: "Responsive Design Best Practices: Ensuring a Seamless Mobile Experience", slug: { current: "responsive-design-best-practices" }, coverImage: "images/blog/4.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
  { _id: "b5", title: "Web Design Mistakes to Avoid: Common Pitfalls and How to Fix Them", slug: { current: "web-design-mistakes-to-avoid" }, coverImage: "images/blog/5.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
  { _id: "b6", title: "Creating Accessible Websites: Why Inclusive Design Matters", slug: { current: "creating-accessible-websites" }, coverImage: "images/blog/6.webp", category: "Tips & Tricks", publishedAt: "2024-03-18" },
];

export const fallbackSiteSettings = {
  siteTitle: "Nathan — Personal Portfolio Website",
  siteDescription: "Personal Portfolio Website",
  menus: [
    { text: "Home", href: "/" },
    { text: "About Me", href: "/about" },
    { text: "What I Do", href: "/services" },
    { text: "Works", href: "/works" },
    { text: "Blog", href: "/blog" },
    { text: "Hire Me", href: "/contact" },
  ],
  socialLinks: [
    { platform: "Facebook", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Instagram", url: "#" },
  ],
  footerText: "All Right Reserved",
  marqueeTexts: [
    "CUSTOM WEBSITE DESIGN",
    "E-COMMERCE WEBSITE",
    "LANDING PAGE DESIGN",
    "FRONT-END DEVELOPMENT",
    "BACK-END DEVELOPMENT",
    "CONTENT MANAGEMENT SYSTEM",
  ],
};
