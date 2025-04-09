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

const coursesData = {
  current: [
    {
      id: 1,
      code: "PCL 401",
      title: "Clinical Pharmacy",
      units: 3,
      grade: "A",
      level: "400",
      progress: 85,
      status: "ongoing",
      lecturer: "Dr. Smith Johnson",
      description:
        "Introduction to clinical pharmacy practice and patient care",
      prerequisites: ["PCL 301", "PCL 302"],
      assessments: [
        { type: "Quiz 1", score: 18, total: 20 },
        { type: "Mid-term", score: 25, total: 30 },
        { type: "Assignment", score: 15, total: 15 },
      ],
    },
    {
      id: 2,
      code: "PCL 402",
      title: "Pharmaceutical Technology",
      units: 4,
      grade: "B",
      level: "400",
      progress: 75,
      status: "ongoing",
      lecturer: "Prof. Sarah Williams",
      description: "Advanced pharmaceutical manufacturing processes",
      prerequisites: ["PCL 303"],
      assessments: [
        { type: "Lab Work", score: 28, total: 30 },
        { type: "Mid-term", score: 22, total: 30 },
        { type: "Project", score: 25, total: 30 },
      ],
    },
    {
      id: 3,
      code: "PCL 403",
      title: "Pharmacology",
      units: 3,
      grade: "A",
      level: "400",
      progress: 90,
      status: "ongoing",
      lecturer: "Dr. Michael Brown",
      description: "Study of drug actions and effects on living systems",
      prerequisites: ["PCL 301"],
      assessments: [
        { type: "Quiz 1", score: 19, total: 20 },
        { type: "Mid-term", score: 28, total: 30 },
        { type: "Quiz 2", score: 18, total: 20 },
      ],
    },
  ],
  previous: [
    {
      id: 4,
      code: "PCL 301",
      title: "Pharmaceutical Chemistry",
      units: 3,
      grade: "A",
      level: "300",
      status: "completed",
    },
    {
      id: 5,
      code: "PCL 302",
      title: "Pharmaceutics",
      units: 4,
      grade: "B",
      level: "300",
      status: "completed",
    },
  ],
};

const updates = [
  {
    id: 1,
    title: "Annual Dinner Night 2024",
    category: "events",
    type: "featured",
    date: "2024-03-25",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    description:
      "Join us for an unforgettable evening of fine dining, live music, and networking with fellow students and faculty members. Early bird tickets available now!",
    venue: "University Grand Hall",
    time: "7:00 PM",
    ticketPrice: "₦5,000",
    organizer: "Student Union Social Committee",
    likes: 156,
    comments: 24,
    tags: ["dinner", "networking", "social"],
  },
  {
    id: 2,
    title: "Faculty of Pharmacy Research Symposium",
    category: "academic",
    type: "important",
    date: "2024-04-10",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    description:
      "Present your research findings at the annual Faculty of Pharmacy Research Symposium. Open to all final year students and postgraduates.",
    venue: "Pharmaceutical Sciences Building",
    time: "9:00 AM - 4:00 PM",
    deadline: "2024-03-30",
    organizer: "Department of Clinical Pharmacy",
    likes: 89,
    comments: 15,
    tags: ["research", "academic", "symposium"],
  },
  {
    id: 3,
    title: "Campus Coffee Shop Grand Opening",
    category: "announcements",
    type: "new",
    date: "2024-03-20",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
    description:
      "Exciting news! A new coffee shop is opening on campus. Enjoy special opening week discounts and free coffee tastings.",
    venue: "Student Center Ground Floor",
    time: "8:00 AM onwards",
    specialOffer: "20% off on all items during opening week",
    likes: 234,
    comments: 42,
    tags: ["coffee", "campus", "food"],
  },
  {
    id: 4,
    title: "Inter-Faculty Sports Competition",
    category: "events",
    type: "upcoming",
    date: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    description:
      "Represent your faculty in various sports competitions. Registration now open for football, basketball, volleyball, and athletics.",
    venue: "University Sports Complex",
    registrationDeadline: "2024-04-01",
    organizer: "Sports Committee",
    likes: 178,
    comments: 31,
    tags: ["sports", "competition", "fitness"],
  },
  {
    id: 5,
    title: "Student Achievement: International Research Award",
    category: "achievements",
    type: "highlight",
    date: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    description:
      "Congratulations to Sarah Johnson from the Department of Pharmacology for winning the International Young Researcher Award at the Global Pharmacy Conference 2024.",
    achievement: "First Prize in Research Innovation",
    likes: 312,
    comments: 45,
    tags: ["achievement", "research", "award"],
  },
];
const facultyMembers = {
  executives: [
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/gentility.jpg?t=2024-10-27T11%3A47%3A15.031Z",
      name: "IGATTA JAMES CHIKAMSO",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "PANS PRESIDENT",
    },
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/deborah.jpg?t=2024-10-27T11%3A47%3A57.826Z",
      name: "ORJI DEBORAH CHIMUANYA",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "PANS VICE PRESIDENT",
    },
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nkwocha.jpg?t=2024-10-27T11%3A47%3A35.002Z",
      name: "NKWOCHA SUCCESS DABERECHUKWU",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "GENERAL SECRETARY",
    },
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/ebubue.jpg?t=2024-10-27T11%3A52%3A56.046Z",
      name: "OGBOZOR EBUBE EMMANUEL",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "ASSt, GENERAL SECRETARY",
    },
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/onyishi.jpg?t=2024-10-27T11%3A48%3A54.788Z",
      name: "ONYISHI CHARLES NNANYEREUGO",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "FINANCIAL SECRETARY",
    },
    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/chisom.jpg?t=2024-10-27T11%3A27%3A38.154Z",
      name: "ABARA CHISOM GABRIEl",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "PUBLIC RELATIONS OFFICER",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/vivian.jpg?t=2024-10-27T11%3A48%3A26.004Z",
      name: "EKOH VIVIAN ONYINYECHUKWU",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "DIRECTOR OF SOCIALS",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/kenneth.jpg?t=2024-10-27T11%3A54%3A19.824Z",
      name: "OBETTA OLUCHUKWU KENNETH",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "ASST. DIRECTOR OF SOCIALS",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/nnabchi.jpg",
      name: "NNABCHI CHISOM NNAMDI",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "LIBRARIAN",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/akosa.jpg?t=2024-10-27T11%3A58%3A32.137Z",
      name: "AKOSA STANLEY",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "DIRECTOR OF SPORTS",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/franklyn.jpg?t=2024-10-27T11%3A49%3A35.633Z",
      name: "EDOMOBI CHIDUBEM FRANKLYN",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "ASST. DIRECTOR OF SPORTS",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/jeremiah.jpg?t=2024-10-27T11%3A50%3A07.065Z",
      name: "ONU JEREMIAH CHISOM",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "EDITOR-IN-CHIEF",
    },

    {
      image:
        "https://qqhuguvunfliberzvjhy.supabase.co/storage/v1/object/public/Excos/michael.jpg?t=2024-10-27T11%3A50%3A54.951Z",
      name: "ONYEMAECHI MICHAEL ONYEMAECHI",
      level: "500",
      quote:
        "Together, we can build a stronger academic community that empowers every student to reach their full potential.",
      bio: "Leading with passion and dedication to create positive change in our faculty.",
      contacts: {
        email: "sarah.j@pharmacy.edu",
        phone: "+234 801 234 5678",
        twitter: "sarahj_pharma",
        linkedin: "sarahjohnson",
        instagram: "sarah.pharma",
      },
      achievements: [
        "Academic Excellence Award 2023",
        "Student Leadership Recognition",
        "Community Service Award",
      ],
      role: "TREASURER",
    },
  ],
};

const forumPosts = [
  {
    id: 1,
    category: "updates",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Head of Research",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    timestamp: "2 hours ago",
    content:
      "Exciting news! Our faculty's research on novel drug delivery systems has been published in the International Journal of Pharmaceutics. This breakthrough could revolutionize how we treat chronic conditions.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500",
    likes: 245,
    comments: 28,
    shares: 15,
  },
  {
    id: 2,
    category: "events",
    author: {
      name: "Prof. Michael Chen",
      role: "Dean of Faculty",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    },
    timestamp: "5 hours ago",
    content:
      "Mark your calendars! The Annual Pharmacy Symposium is happening next month. We'll be hosting renowned speakers from around the globe discussing the future of pharmaceutical care. Registration opens next week!",
    likes: 189,
    comments: 42,
    shares: 31,
  },
  {
    id: 3,
    category: "research",
    author: {
      name: "Dr. Emily Rodriguez",
      role: "Research Fellow",
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500",
    },
    timestamp: "1 day ago",
    content:
      "Just completed our preliminary studies on plant-based alternatives to traditional antibiotics. The results are promising! Looking forward to sharing more details in the upcoming research conference.",
    image: "https://images.unsplash.com/photo-1626315869436-d6989fea3e88?w=500",
    likes: 312,
    comments: 56,
    shares: 28,
  },
  {
    id: 4,
    category: "discussions",
    author: {
      name: "Alex Thompson",
      role: "Final Year Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    },
    timestamp: "3 days ago",
    content:
      "Interesting debate in today's ethics class about AI in pharmacy practice. What are your thoughts on automated prescription verification systems? How do we balance efficiency with patient safety?",
    likes: 167,
    comments: 89,
    shares: 12,
  },
  {
    id: 5,
    category: "updates",
    author: {
      name: "Dr. Lisa Wong",
      role: "Clinical Coordinator",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
    },
    timestamp: "4 days ago",
    content:
      "New clinical rotation partnerships announced! We're now collaborating with five additional hospitals to provide diverse practical experience for our students. This expansion will offer more specialized training opportunities in pediatric and geriatric pharmacy care.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500",
    likes: 234,
    comments: 45,
    shares: 23,
  },
];

const sampleCourses = [
  {
    id: 1,
    code: "PCL 401",
    title: "Clinical Pharmacy",
    units: 3,
    grade: "A",
    level: "400",
    progress: 85,
    status: "ongoing",
  },
  {
    id: 2,
    code: "PCL 402",
    title: "Pharmaceutical Technology",
    units: 4,
    grade: "B",
    level: "400",
    progress: 75,
    status: "ongoing",
  },
  {
    id: 3,
    code: "PCL 403",
    title: "Pharmacology",
    units: 3,
    grade: "A",
    level: "400",
    progress: 90,
    status: "ongoing",
  },
  {
    id: 4,
    code: "PCL 301",
    title: "Pharmaceutical Chemistry",
    units: 3,
    grade: "A",
    level: "300",
    status: "completed",
  },
];

const levels = ["100", "200", "300", "400", "500"];
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
export {
  levels,
  semesters,
  coursesData,
  updates,
  facultyMembers,
  forumPosts,
  sampleCourses,
};

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

export const posts = [
  {
    id: 1,
    author: {
      name: "Dr. Sarah Williams",
      role: "HOD, Clinical Pharmacy",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      verified: true,
      type: "staff",
    },
    content:
      "Exciting news! Our faculty has been awarded a major research grant for innovative drug development. This opens up numerous opportunities for both staff and students. Stay tuned for research assistant positions and internship opportunities.",
    images: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    ],
    timestamp: "2024-03-15T10:30:00",
    likes: 245,
    comments: [
      {
        id: 1,
        author: {
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80",
          type: "student",
        },
        content:
          "This is fantastic news! Looking forward to the opportunities.",
        timestamp: "2024-03-15T10:35:00",
        likes: 12,
      },
      {
        id: 2,
        author: {
          name: "Prof. Michael Chen",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
          verified: true,
          type: "staff",
        },
        content:
          "Congratulations to the research team! This will significantly boost our research capabilities.",
        timestamp: "2024-03-15T11:00:00",
        likes: 28,
      },
    ],
    tags: ["research", "opportunities", "grants"],
  },
  {
    id: 2,
    author: {
      name: "Amina Ibrahim",
      role: "500 Level Class Rep",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80",
      type: "student",
    },
    content:
      "Great session at today's pharmaceutical care workshop! Here are some highlights from the practical demonstrations. Special thanks to our facilitators for the hands-on experience. #PharmCare #PracticalSkills",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    ],
    timestamp: "2024-03-14T15:45:00",
    likes: 183,
    comments: [
      {
        id: 3,
        author: {
          name: "Dr. Emily Chen",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
          verified: true,
          type: "staff",
        },
        content:
          "Excellent work everyone! The enthusiasm shown during the practical session was impressive.",
        timestamp: "2024-03-14T16:00:00",
        likes: 15,
      },
    ],
    tags: ["workshop", "practical", "learning"],
  },
  {
    id: 3,
    author: {
      name: "Prof. James Anderson",
      role: "Dean, Faculty of Pharmacy",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      verified: true,
      type: "staff",
    },
    content:
      "Proud to announce our faculty's new partnership with Johnson & Johnson for advanced research in drug delivery systems. This collaboration will provide invaluable industry exposure for our final year students.",
    timestamp: "2024-03-13T09:15:00",
    likes: 312,
    comments: [
      {
        id: 4,
        author: {
          name: "Grace Adebayo",
          image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
          type: "student",
        },
        content:
          "This is incredible! Will there be internship opportunities as part of this partnership?",
        timestamp: "2024-03-13T09:30:00",
        likes: 8,
      },
    ],
    tags: ["partnership", "research", "industry"],
  },
];
