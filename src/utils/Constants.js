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
  {
    id: "Pharmaceutical_Chemistry",
    name: "Pharmaceutical Chemistry",
    hod: "Dr. Amaka Okorie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdEpgTMKe29zDpmINeYXXLEw84rHBto7s_Q&s",
  },
  {
    id: "Pharmacognosy",
    name: "Pharmacognosy",
    hod: "Dr Obinna Onugwu",
    image:
      "https://i0.wp.com/msajpharm-edu.in/wp-content/uploads/2022/10/gn2.jpg?fit=612%2C520&ssl=1",
  },

  {
    id: "Pharmaceutics_and_Pharmaceutical_technology",
    name: "Pharmaceutics and Pharmaceutical technology",
    hod: "Dr. Omeh Romanus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CO-xlB1NUKP6GDBa4Hdn0sCZ9dOPOmRCpA&s",
  },
  {
    id: "pharmacology",
    name: "pharmacology",
    hod: "Ass. Prof. Daniel Ajaghaku",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMpfN4UyfoHmDR16jCNxY7Ngufrb_Q1ew9Q&s",
  },
  {
    id: "clinical_pharmacy",
    name: "Clinical Pharmacy and Bio-Pharmaceutics",
    hod: "Dr. Ofor Amala",
    image:
      "https://www.csi.cuny.edu/sites/default/files/styles/inner_page_slider/public/images/slider/caduceus-pharmD2-bkgd.jpg?itok=90WPoq7h",
  },
  {
    id: "pharmaceutical_microbiology",
    name: "Pharmaceutical Microbiology and Biotechnology",
    hod: "Dr Jane ugochukwu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzXahzfoZ52n4CpvYeJ-hXZzDGDyODuqmUg&s",
  },
];

export const resources = {
  Pharmaceutics_and_Pharmaceutical_technology: [
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
