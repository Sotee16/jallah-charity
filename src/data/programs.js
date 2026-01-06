import relief1 from "../assets/images/emergency/relief1.jpg";
import relief2 from "../assets/images/emergency/relief2.jpg";
import relief3 from "../assets/images/emergency/relief3.jpg";
import edu1 from "../assets/images/education/edu1.jpg";
import edu2 from "../assets/images/education/edu2.jpg";
import health1 from "../assets/images/health/health1.jpg";
import health2 from "../assets/images/health/health2.jpg";
import health3 from "../assets/images/health/health3.jpg";
import women1 from "../assets/images/women/women1.jpg";
import  women2 from "../assets/images/women/women2.jpg";
import youth1 from "../assets/images/youth/youth1.jpg";
import youth2 from "../assets/images/youth/youth2.jpg"; 

export const rescueLiberiaPrograms = [
  {
    id: "emergency-relief",
    title: "Emergency Relief & Disaster Response",
    description: "...",
    impact: "...",
    beneficiaries: ["Displaced families", "Disaster victims", "Rural and high-risk communities"],
    gallery: [relief1, relief2, relief3], // ← use imports here
  },
  {
    id: "education-support",
    title: "Education Support for Vulnerable Children",
    description: "...",
    impact: "...",
    beneficiaries: ["Orphaned children", "Children from low-income households", "Rural community students"],
    gallery: [edu1, edu2], // ← use imports
  },
  {
    id: "health-outreach",
    title: "Health Outreach & Medical Assistance",
    description: "...",
    impact: "...",
    beneficiaries: ["Pregnant women", "Elderly citizens", "Rural communities"],
    gallery: [health1, health2, health3],
  },
  {
    id: "women-empowerment",
    title: "Women & Girls Empowerment",
    description: "...",
    impact: "...",
    beneficiaries: ["Women entrepreneurs", "Teenage girls", "Single mothers"],
    gallery: [women1, women2],
  },
  {
    id: "youth-skills",
    title: "Youth Skills & Livelihood Training",
    description: "...",
    impact: "...",
    beneficiaries: ["Unemployed youth", "School dropouts", "At-risk young people"],
    gallery: [youth1, youth2],
  },
];
