import {
  FlaskConical,
  Leaf,
  Microscope,
  PillIcon,
  Stethoscope,
} from "lucide-react";

export const settingsvariants = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  itemVariants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
};

const levels = [
  { value: 100, label: "100lvl" },
  { value: 200, label: "200lvl" },
  { value: 300, label: "300lvl" },
  { value: 400, label: "400lvl" },
  { value: 500, label: "500lvl" },
  { value: 600, label: "600lvl" },
];
const semesters = [
  { id: "first", label: "First Semester" },
  { id: "second", label: "Second Semester" },
];

export const gradePoints = {
  A: 5,
  B: 4,
  C: 3,
  D: 0,
  E: 0,
  F: 0,
};
export { levels, semesters };

export const departments = [
  { id: "pharmaceutics", name: "Pharmaceutics", icon: FlaskConical },
  { id: "pharmacology", name: "Pharmacology", icon: PillIcon },
  {
    id: "pharmaceutical-chemistry",
    name: "Pharmaceutical Chemistry",
    icon: Microscope,
  },
  { id: "pharmacognosy", name: "Pharmacognosy", icon: Leaf },
  { id: "clinical-pharmacy", name: "Clinical Pharmacy", icon: Stethoscope },
  {
    id: "pharmaceutical-microbiology",
    name: "Pharmaceutical Microbiology",
    icon: Microscope,
  },
];

export const resources = {
  pharmaceutics: [
    {
      id: 1,
      title: "Physical Pharmacy Textbook",
      type: "textbook",
      author: "Dr. Alfred Martin",
      description: "Comprehensive guide to physical pharmacy principles",
      fileSize: "25.4 MB",
      uploadDate: "2024-02-15",
      downloads: 234,
      views: 1205,
      rating: 4.5,
      fileUrl: "#",
      previewUrl: "#",
      coverImage:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Pharmaceutical Calculations",
      type: "notes",
      author: "Prof. Sarah Williams",
      description:
        "Detailed notes on pharmaceutical calculations and formulations",
      fileSize: "12.8 MB",
      uploadDate: "2024-03-01",
      downloads: 156,
      views: 890,
      rating: 4.8,
      fileUrl: "#",
      previewUrl: "#",
    },
  ],
  pharmacology: [
    {
      id: 3,
      title: "Clinical Pharmacology",
      type: "textbook",
      author: "Dr. James Smith",
      description: "Essential concepts in clinical pharmacology",
      fileSize: "30.2 MB",
      uploadDate: "2024-02-28",
      downloads: 189,
      views: 945,
      rating: 4.7,
      fileUrl: "#",
      previewUrl: "#",
      coverImage:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    },
  ],
};
