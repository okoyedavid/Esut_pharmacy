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
    id: "Pharmaceutics",
    name: "Pharmaceutics",
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
    name: "Clinical Pharmacy",
    hod: "Dr. Ofor Amala",
    image:
      "https://www.csi.cuny.edu/sites/default/files/styles/inner_page_slider/public/images/slider/caduceus-pharmD2-bkgd.jpg?itok=90WPoq7h",
  },
  {
    id: "pharmaceutical_microbiology",
    name: "Pharmaceutical Microbiology",
    hod: "Dr Jane ugochukwu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzXahzfoZ52n4CpvYeJ-hXZzDGDyODuqmUg&s",
  },
];

export const event = {
  active: true,
  description: "Annual Pharmaceutical Association of Nigerian Students Week",
  endDate: "2025-05-02T06:12:23.041Z",
  id: 1,
  startDate: "2025-04-20T06:12:23.041Z",
  title: "PANS Week 2025",
  votePrice: 50,
};
