
import logo1 from "@/assets/Screenshot 2024-10-01 020847.png" 
import logo2 from "@/assets/Screenshot 2025-02-09 210529.png"
import logo3 from "@/assets/Screenshot 2025-02-09 211220.png"
import logo4 from "@/assets/11_university-website-design.jpg"
import logo5 from "@/assets/Screenshot 2025-02-09 211813.png"
import logo6 from "@/assets/Screenshot 2025-02-10 022821.png"
import { Project } from '@/types/types';

export const projects : Project[]= [
  {
    id: "1",
    name: "E-Bus Ticketing Platform",
    description: "A platform for booking bus tickets online, built with Tailwind CSS, CSS, and JavaScript. Includes bus schedules, user authentication, and ticket management.",
    technologies: ["Tailwind CSS", "CSS", "JavaScript"],
    link: "https://ebusticketing.com",
    github: "https://github.com/Junaeid11/Bus-ticket-booking",
    completionDate: "2024-06-30",
    image: logo1,
    status: "Completed",
    features: [
      "User-friendly interface for bus ticket booking",
      "Bus schedule management",
      "Ticket booking history and management"
    ],
    challenges: [
      "Ensuring a smooth ticket booking experience",
      "Handling multiple bus schedules and availability"
    ],
    opinions: [
      "This project was a great challenge in terms of UI/UX design and making sure the user flow was seamless.",
      "Integrating ticket management and ensuring real-time availability was a learning experience."
    ]
  },
  {
    id: "2",
    name: "E-Commerce Bicycle Store",
    description: "An e-commerce platform for selling bicycles and accessories, built with both frontend and backend technologies. Includes product catalog, shopping cart, and user authentication.",
    technologies: ["Next.js", "MongoDB", "JWT", "Node.js", "Tailwind CSS"],
    link: "https://bicyclestore.com",
    github: "https://github.com/Junaeid11/kninck-Cycle-Store",
    completionDate: "2025-02-05",
    image: logo2,
    status: "Completed",
    features: [
      "Product catalog with filtering and sorting",
      "User authentication and authorization",
      "Payment gateway integration"
    ],
    challenges: [
      "Handling asynchronous data fetching",
      "Integrating a secure payment system"
    ],
    opinions: [
      "Building the shopping cart system was a rewarding challenge. It allowed me to learn how to manage state effectively using Redux.",
      "I’m excited to finish the payment gateway integration and enhance security further."
    ]
  },
  {
    id: "3",
    name: "Personal Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills, built with frontend and backend technologies. Includes sections for projects, blog, and contact.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    link: "https://myportfolio.com",
    github: "https://github.com/Junaeid11/personal-portfolio",
    completionDate: "2024-01-15",
    image: logo3,
    status: "Completed",
    features: [
      "Responsive design for desktop and mobile",
      "SEO optimized",
      "Integrated blog and contact form"
    ],
    challenges: [
      "Customizing the blog section for dynamic content",
      "Implementing dark mode feature"
    ],
    opinions: [
      "I really enjoyed working on this project because it was a chance to showcase my skills using both frontend and backend technologies.",
      "The dark mode feature was a fun challenge that made the site feel more interactive."
    ]
  },
  {
    id: "4",
    name: "PH University Full-Stack Project",
    description: "A full-stack project for managing students, courses, and grades in a university system. Built with Node.js, MongoDB, and React.",
    technologies: ["Node.js", "MongoDB", "React", "JWT"],
    link: "https://phuniversity.com",
    github: "https://github.com/Junaeid11/PH-University",
    completionDate: "2024-12-01",
    image: logo4,
    status: "Completed",
    features: [
      "Student registration and login",
      "Course management system",
      "Grade tracking and reporting"
    ],
    challenges: [
      "Designing a secure and scalable student authentication system",
      "Building a flexible grading system"
    ],
    opinions: [
      "This was a great project to work on because I got to integrate both front-end and back-end systems into a unified application.",
      "It was an exciting challenge to ensure data integrity and security in the grading and student management features."
    ]
  },
  {
    id: "5",
    name: "Real Estate Website",
    description: "A real estate website for browsing property listings, with advanced search filters and property details, built using Tailwind CSS and CSS.",
    technologies: ["Tailwind CSS", "CSS", "JavaScript"],
    link: "https://realestate.com",
    github: "https://github.com/Junaeid11/Assignment-03",
    completionDate: "2023-10-15",
    image: logo5,
    status: "Completed",
    features: [
      "Advanced search filters for properties",
      "Responsive design for mobile and desktop",
      "Property details with image gallery"
    ],
    challenges: [
      "Ensuring fast load times for property images and data",
      "Creating a fluid and intuitive search experience"
    ],
    opinions: [
      "This project was a fantastic opportunity to practice designing for real-world applications with user-friendly features.",
      "Optimizing the search functionality and image loading was key to providing a smooth user experience."
    ]
  },
  {
    id: "6",
    name: "Pet Shop Website",
    description: "A website for browsing and purchasing pets and pet-related products, featuring a user-friendly interface with product categories, pet adoption, and payment system, built using Tailwind CSS and JavaScript.",
    technologies: ["Tailwind CSS", "JavaScript", "HTML", "CSS"],
    link: "https://petshop.com",
    github: "https://github.com/Junaeid11/PetShop",
    completionDate: "2024-12-05",
    image: logo6,
    status: "in Progress",
    features: [
      "Pet adoption system with product listings",
      "User-friendly checkout process",
      "Mobile-responsive design"
    ],
    challenges: [
      "Implementing an intuitive user interface for browsing pets and products",
      "Ensuring secure payment processing"
    ],
    opinions: [
      "This project gave me the chance to combine e-commerce functionality with a niche focus on pets.",
      "I faced interesting challenges in creating a seamless shopping experience and handling sensitive data securely."
    ]
  },
  
];

;