// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "葛歆瞳",
  initials:   "葛歆瞳学术主页",
  role:       "副主任医师，副教授，硕士生导师",
  university: "天津医科大学总医院",
  email:      "xge@tmu.edu.cn",
  bio:        "脑损伤与脑体互作",
  photo:      "assets/avatar.png",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "10+",  label: "Publications" },
    { value: "200+", label: "Citations" },
    { value: "5+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2025,
      title:    "Decreased IL-33 in the brain following repetitive mild traumatic brain injury contributes to cognitive impairment by inhibiting microglial phagocytosis",
      authors:  "末位通讯作者",
      venue:    "Military Medical Research. 2025; 12(1)",
      links:    { pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12323175/pdf/40779_2025_Article_631.pdf"},
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2024,
      title:    "Another Paper Title",
      authors:  "Your Name, Co-Author 1",
      venue:    "Conference / Journal Name 2024",
      links:    { pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12323175/pdf/40779_2025_Article_631.pdf" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2026.03", badge: "New",   text: "Circulation论文接收！Hypercholesterolemia-induced inhibition of AMP-activated protein kinase accelerates regulatory T cell senescence and atherosclerosis in humans and mice. Circulation. 2026. 共一排二" },
    { date: "2026.05", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
