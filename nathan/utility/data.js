export const rootElements = {
  home2: {
    "--primary-color": "#000000",
    "--primary-color-rgb": "0, 0, 0",
    "--secondary-color": "#000000",
    "--secondary-color-rgb": "0, 0, 0",
  },
  home3: {
    "--primary-color": "#c27c86",
    "--primary-color-rgb": "194, 124, 134, 1.0",
    "--secondary-color": "#828080",
    "--secondary-color-rgb": "130, 128, 128",
    "--bg-color": "#f7f2ec",
    "--body-font": "Roboto",
    "--body-font-color": "#929191",
    "--body-font-size": "17px",
    "--title-font": "Cormorant Garamond",
    "--title-font-color": "#828080",
    "--title-font-weight": "500",
    "--color-1": "#c27c86",
    "--color-2": "#8d839c",
  },
  home4: {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#828080",
    "--secondary-color-rgb": "130, 128, 128",
    "--bg-color": "#f7f2ec",
    "--body-font": "'Inter'",
    "--body-font-color": "#929191",
    "--body-font-size": "17px",
    "--title-font": "'Raleway'",
    "--title-font-color": "#828080",
    "--title-font-weight": "500",
  },
  home5: {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  },
};

export const menus = {
  home2: [
    { id: 1, href: "/02_index", text: "Home" },
    { id: 2, href: "/02_about", text: "About Me" },
    { id: 3, href: "/02_services", text: "What I Do" },
    { id: 4, href: "/02_works", text: "Works" },
    { id: 5, href: "/02_blog", text: "Blog" },
    { id: 6, href: "/02_contact", text: "Hire Me" },
  ],
  home3: [
    { id: 1, href: "/03_index", text: "Home" },
    { id: 2, href: "/03_about", text: "About" },
    { id: 3, href: "/03_services", text: "Services" },
    { id: 4, href: "/03_works", text: "Portfolio" },
    { id: 5, href: "/03_blog", text: "Blog" },
    { id: 6, href: "/03_contact", text: "Contact" },
  ],
  home4: [
    { id: 1, href: "/04_index", text: "Home" },
    { id: 2, href: "#section-about", text: "About Me" },
    { id: 3, href: "#section-what-i-do", text: "What I Do" },
    { id: 4, href: "#section-works", text: "Works" },
    { id: 5, href: "#section-blog", text: "Blog" },
    { id: 6, href: "/04_contact", text: "Hire Me" },
  ],
  home5: [
    { id: 1, href: "#top", text: "Home", dataText: "Home" },
    {
      id: 2,
      href: "#section-services",
      text: "Services",
      dataText: "Services",
    },
    { id: 3, href: "#section-about", text: "About Me", dataText: "About Me" },
    {
      id: 4,
      href: "#section-why",
      text: "Why Choose Me",
      dataText: "Why Choose Me",
    },
    {
      id: 5,
      href: "#section-testimonial",
      text: "Testimonials",
      dataText: "Testimonials",
    },
    { id: 6, href: "#section-contact", text: "Contact", dataText: "Contact" },
  ],
  home6: [
    { id: 1, href: "/06_index", text: "Home" },
    { id: 2, href: "/06_about", text: "About Me" },
    { id: 3, href: "/06_services", text: "What I Do" },
    { id: 4, href: "/06_works", text: "Works" },
    { id: 5, href: "/06_blog", text: "Blog" },
    { id: 6, href: "/06_contact", text: "Hire Me" },
  ],
  home7: [
    { id: 1, href: "/07_index", text: "Home" },
    { id: 2, href: "/07_about", text: "About Me" },
    { id: 3, href: "/07_services", text: "What I Do" },
    { id: 4, href: "/07_works", text: "Works" },
    { id: 5, href: "/07_blog", text: "Blog" },
    { id: 6, href: "/07_contact", text: "Hire Me" },
  ],
};

export const fetchLargeDataSet = async (page, limit) => {
  // Simulate API call or database query
  const start = (page - 1) * limit;
  const end = start + limit;
  return largeDataSet.slice(start, end);
};

export const largeDataSet = [
  // ... potentially large array of data ...
];
