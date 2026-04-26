import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Shafayet Sadik Sowad",
  role: "Systems Engineer",
  location: "Dhaka, Bangladesh",
  email: "shafayetsadiksowad@gmail.com",
  description:
    "Portfolio of Shafayet Sadik Sowad, a systems engineer focused on robotics, autonomous drones, embedded hardware, PCB design, and machine-learning-driven wireless systems.",
  siteUrl: "https://shafayetsadiksowad.github.io",
  footerNote:
    "Robotics, embedded systems, autonomous drones, and applied machine learning.",
  hero: {
    label: "00 / Intro",
    title: "Shafayet Sadik Sowad",
    intro:
      "I build robotics and embedded systems that connect hardware, autonomy, sensing, and field-ready engineering.",
    kicker:
      "Systems engineer working across UAVs, SLAM, PCB design, machine learning, and wireless network optimization.",
    availability:
      "Current Systems Engineer at ANTS Aerial Systems and BSc EEE graduate from Islamic University of Technology.",
    highlights: [
      "Drone systems and field operations",
      "Embedded hardware and PCB design",
      "ML-driven LTE handover research",
    ],
    ctas: [
      {
        label: "View projects",
        href: "#projects",
        variant: "primary",
      },
      {
        label: "Email me",
        href: "mailto:shafayetsadiksowad@gmail.com",
        variant: "secondary",
        external: true,
      },
    ],
  },
  contact: {
    label: "07 / Contact",
    title: "Let's build field-ready robotic systems.",
    intro:
      "I am interested in robotics, autonomous systems, UAV platforms, embedded hardware, and intelligent field robotics research.",
    availability:
      "Open to research, engineering, and graduate opportunities in robotics and autonomous systems.",
    note: "The quickest path is email. Include the project context, technical goals, and expected timeline.",
    ctas: [
      {
        label: "Start a conversation",
        href: "mailto:shafayetsadiksowad@gmail.com",
        variant: "primary",
        external: true,
      },
      {
        label: "See GitHub",
        href: "https://github.com/ShafayetSadik",
        variant: "secondary",
        external: true,
      },
    ],
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ShafayetSadik",
      value: "github.com/ShafayetSadik",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shafayetsadiksowad/",
      value: "linkedin.com/in/shafayetsadiksowad",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:shafayetsadiksowad@gmail.com",
      value: "shafayetsadiksowad@gmail.com",
      icon: "mail",
    },
  ],
};
