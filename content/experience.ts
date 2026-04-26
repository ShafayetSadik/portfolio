import type { ExperienceContent } from "@/lib/types";

export const experienceContent: ExperienceContent = {
  label: "04 / Experience",
  title: "Engineering roles across UAVs, R&D, and embedded systems.",
  intro:
    "My professional work combines field deployment, research, circuit design, flight-control integration, and practical system development.",
  items: [
    {
      company: "ANTS Aerial Systems",
      role: "Systems Engineer",
      period: "Oct 2025 - Current",
      location: "Dhaka, Bangladesh",
      summary:
        "Developing and testing drone systems for light shows, surveillance, agriculture, real estate simulation, thermography, and custom payload research.",
      highlights: [
        "Developed light show drone systems with synchronized flight control, formation execution, and a custom light show designer.",
        "Worked on drone surveillance, agricultural mapping, thermal inspection, solar shading analysis, and real estate window-view simulation workflows.",
        "Conducted R&D on custom payload drones and GPS-denied drone systems while contributing to schematic and PCB development.",
      ],
      stack: [
        "UAV Systems",
        "Flight Control",
        "OpenCV",
        "PCB Design",
        "Thermography",
      ],
    },
    {
      company: "Cybernetics Hi-Tech Solutions (Pvt.) Ltd.",
      role: "R&D Engineer Intern",
      period: "Jun 2024 - Oct 2025",
      location: "Dhaka, Bangladesh",
      summary:
        "Supported R&D across energy metering, actuator selection, drone communication, sensing integration, BMS design, and AGV research.",
      highlights: [
        "Studied energy metering ICs, register structures, reference code, and prepared technical documentation.",
        "Worked with SBUS, UART, USB, MAVLink, LiDAR, optical sensors, and Pixhawk parameter configuration.",
        "Contributed to BMS circuit design, schematic development, Eagle libraries, PCB practices, and AGV research review.",
      ],
      stack: ["MAVLink", "Pixhawk", "LiDAR", "BMS", "Eagle", "PCB Design"],
    },
    {
      company: "Islamic University of Technology",
      role: "BSc in Electrical and Electronic Engineering",
      period: "Jun 2021 - Oct 2025",
      location: "Gazipur, Bangladesh",
      summary:
        "Completed undergraduate study in EEE with a final grade of 3.64 and thesis work on ML-based handover prediction for cellular mobility data.",
      highlights: [
        "Thesis: Triplet-Loss-Driven Contrastive Autoencoding for Anomaly-Based Handover Prediction Using Drive-Test Data.",
        "Worked on robotics projects including Project Altair, Project Aero, and Project Aqua through IUT robotics activities.",
        "Held leadership roles in IEEE RAS IUT Student Branch Chapter, IUT Robotics Society, Project Aero, and PCB design competitions.",
      ],
      stack: [
        "EEE",
        "Machine Learning",
        "Robotics",
        "Wireless Networks",
        "PCB",
      ],
    },
  ],
};
