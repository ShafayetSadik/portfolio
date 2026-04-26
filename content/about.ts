import type { AboutContent } from "@/lib/types";

export const aboutContent: AboutContent = {
  label: "01 / About",
  title: "Robotics engineer with hardware, autonomy, and research depth.",
  intro:
    "My work sits at the intersection of electrical engineering, autonomous robots, embedded systems, and applied machine learning.",
  body: [
    "I completed my BSc in Electrical and Electronic Engineering at Islamic University of Technology with a CGPA of 3.64. My thesis focused on triplet-loss-driven contrastive autoencoding for anomaly-based handover prediction using drive-test data in dynamic cellular environments.",
    "Professionally, I work on drone light show systems, surveillance drones, agricultural mapping, custom payload platforms, GPS-denied systems, thermal image processing, and PCB development. I care about turning research and prototypes into systems that survive real field constraints.",
  ],
  stats: [
    { value: 3, suffix: "+", label: "Years in robotics and embedded systems" },
    { value: 100, suffix: "+", label: "Sq. km agricultural drone mapping" },
    { value: 5, suffix: "+", label: "Research publications and submissions" },
    { value: 3, label: "International robotics finalist placements" },
  ],
};
