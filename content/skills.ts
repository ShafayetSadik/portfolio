import type { SkillsContent } from "@/lib/types";

export const skillsContent: SkillsContent = {
  label: "02 / Skills",
  title: "Robotics, embedded systems, and applied intelligence.",
  intro:
    "My technical work spans autonomous platforms, embedded hardware, simulation, PCB development, and machine-learning workflows.",
  groups: [
    {
      title: "Robotics & Autonomy",
      summary:
        "Autonomous systems work across drone platforms, sensing, navigation, simulation, and field testing.",
      items: [
        "ROS",
        "SLAM",
        "Linux",
        "Kinematics",
        "Visual Odometry",
        "Gazebo",
        "Pixhawk",
        "MAVLink",
        "OpenCV",
      ],
    },
    {
      title: "Programming & ML",
      summary:
        "Software and research tooling for control, data analysis, modeling, and intelligent systems.",
      items: [
        "Python",
        "C++",
        "Object Oriented Programming",
        "Git",
        "Machine Learning",
        "Deep Learning",
        "MATLAB",
        "Assembly",
        "LaTeX",
      ],
    },
    {
      title: "Circuit Design & PCB",
      summary:
        "Electrical design experience from simulation and schematic capture to PCB prototyping.",
      items: [
        "PCB Design",
        "KiCad",
        "Altium",
        "Eagle",
        "Proteus",
        "Cadence Virtuoso",
        "PSpice",
        "OrCAD",
        "Verilog",
        "Fusion 360",
      ],
    },
    {
      title: "Spatial & Field Systems",
      summary:
        "Tools and workflows for mapping, drone survey, geospatial planning, and real-world operations.",
      items: [
        "QGIS",
        "Agisoft Metashape",
        "Thermography",
        "LiDAR",
        "Optical Sensors",
        "Field Testing",
      ],
    },
  ],
};
