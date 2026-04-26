import type { ProjectsContent } from "@/lib/types";

export const projectsContent: ProjectsContent = {
  label: "03 / Projects",
  title: "Selected robotics, embedded, and ML projects.",
  intro:
    "A selection of systems from autonomous robots, embedded hardware, IoT monitoring, and wireless-network research.",
  items: [
    {
      id: "mars-rover",
      title: "MARS Rover",
      year: 2025,
      summary:
        "Electrical systems and custom PCBs for a rover platform with autonomous navigation and communication subsystems.",
      description:
        "Developed embedded electrical systems, custom PCB modules, and integration workflows for rover autonomy, communication, and reliable field operation.",
      tags: ["Robotics", "PCB Design", "Autonomy", "Embedded Systems"],
      metrics: [
        { label: "Competition", value: "URC / ERC / IRC" },
        { label: "Role", value: "Electrical" },
        { label: "Focus", value: "Rover systems" },
      ],
    },
    {
      id: "autonomous-slam-drone",
      title: "Autonomous SLAM Drone",
      year: 2024,
      summary:
        "Autonomous drone platform integrating Pixhawk, Raspberry Pi, RealSense depth sensing, and optical flow.",
      description:
        "Worked on sensing and flight-control integration for autonomous navigation using Pixhawk, Raspberry Pi, Intel RealSense D435, and optical flow sensor inputs.",
      tags: ["UAV", "SLAM", "Pixhawk", "RealSense"],
      metrics: [
        { label: "Compute", value: "Raspberry Pi" },
        { label: "Sensor", value: "RealSense D435" },
        { label: "Control", value: "Pixhawk" },
      ],
    },
    {
      id: "lte-handover-optimization",
      title: "Machine Learning-Driven Handover Optimization in LTE Networks",
      year: 2025,
      summary:
        "Research project using supervised ML, clustering, and reinforcement learning to predict and optimize LTE handovers.",
      description:
        "Built and evaluated models using signal-quality and drive-test data, including supervised learning, K-Means clustering, Q-learning, DQN, fuzzy logic, contextual bandits, and contrastive autoencoding.",
      tags: [
        "Machine Learning",
        "LTE",
        "Reinforcement Learning",
        "Wireless Networks",
      ],
      metrics: [
        { label: "Data", value: "Drive-test" },
        { label: "Methods", value: "ML + RL" },
        { label: "Output", value: "Publications" },
      ],
    },
    {
      id: "underwater-rov",
      title: "Underwater ROV Design",
      year: 2023,
      summary:
        "Sensor, power, and communication systems for a remotely operated underwater vehicle.",
      description:
        "Designed and integrated electrical subsystems to support reliable control, monitoring, communication, and data transmission for underwater robotics.",
      tags: ["ROV", "Sensors", "Power Systems", "Communication"],
      metrics: [
        { label: "Competition", value: "IIT Guwahati" },
        { label: "Result", value: "2nd place" },
        { label: "Role", value: "Systems" },
      ],
    },
    {
      id: "six-cell-bms",
      title: "LiPo 6S Battery Management System",
      year: 2024,
      summary:
        "Analog 6S battery management system using logic gates, op-amps, simulation, and PCB prototyping.",
      description:
        "Designed a functional BMS prototype with analog components, Simulink simulation, and PCB implementation for battery monitoring and protection workflows.",
      tags: ["BMS", "Analog Circuits", "PCB", "Simulink"],
      metrics: [
        { label: "Cells", value: "6S" },
        { label: "Design", value: "Analog" },
        { label: "Output", value: "PCB prototype" },
      ],
    },
  ],
};
