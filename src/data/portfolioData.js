export const portfolioData = {
  personal: {
    name: "Sri Lakshmi Reddy Sanikommu",
    title: "Software Engineer",
    location: "Phoenix, AZ",
    phone: "+1 (928) 863-9067",
    email: "sanikommusrilakshmireddy@gmail.com",
    resumeLink: "#"
  },
  summary: "I am a Software Engineer with over 3 years of experience in designing and developing high-performance, scalable applications. My expertise lies in modern technologies such as Java, NestJS, Spring Boot, Microservices, GCP, AWS, MongoDB and SQL. I have a proven track record of modernizing legacy modules, optimizing system performance, and ensuring seamless deployments in fast-paced production environments.",
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Northern Arizona University",
      location: "Flagstaff, AZ",
      gpa: "3.6/4.0"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Lovely Professional University",
      location: "Punjab, IN",
      gpa: "3.0/4.0"
    }
  ],
  experience: [
    {
      company: "CVS",
      location: "Phoenix, AZ",
      role: "Full Stack Developer",
      duration: "Nov 2025 – Present",
      achievements: [
        "Engineered backend services for a high-volume customer engagement and campaign platform (email & SMS) using Node.js, NestJS, and Spring Boot.",
        "Spearheaded the migration of legacy Node.js modules to NestJS, utilizing TypeScript to restructure controllers, services, and data access layers.",
        "Developed and optimized RESTful APIs to support complex campaign management, messaging workflows, and seamless internal service integrations.",
        "Implemented an advanced Kafka consumer to process asynchronous events, validate marketing content via Salesforce Marketing Cloud (SFMC), and synchronize the database for UI rendering.",
        "Architected database operations and optimized high-volume read/write search workloads across MongoDB, PostgreSQL, and MySQL.",
        "Integrated Redis caching strategies for frequently accessed data, significantly reducing database load and improving overall application performance."
      ]
    },
    {
      company: "PTC",
      location: "Remote",
      role: "Software Developer",
      duration: "Jan 2024 – Oct 2025",
      achievements: [
        "Developed a ReactJS and TypeScript internal platform, improving UX and reducing page load time by 25%.",
        "Configured Apigee API Gateway policies for authentication, caching, and request transformation, increasing API performance and security.",
        "Integrated Kafka-based event streaming to process asynchronous logs from microservices, reducing latency by 40% and enhancing system reliability.",
        "Developed and refined backend functionality with Java and J2EE, applying core design concepts to support efficient data processing.",
        "Optimized database queries and implemented Junit, Jest test frameworks, achieving 90% test coverage and improving reliability.",
        "Implemented RabbitMQ for asynchronous communication, enhancing scalability and system resilience."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, IN",
      role: "Software Developer (Programmer Analyst)",
      duration: "Jan 2021 – Jul 2022",
      achievements: [
        "Assisted in developing and maintaining a web-based banking portal using Java and Spring Boot, creating REST APIs for basic financial operations.",
        "Collaborated with senior developers to build frontend features and API integrations using Express.js and React/Redux, improving search functionality for user transactions.",
        "Wrote and optimized MongoDB queries to retrieve customer and transaction data efficiently for the banking application.",
        "Supported the deployment process by monitoring Jenkins CI/CD pipelines and helping to resolve routine build issues.",
        "Developed responsive user interfaces for banking dashboards using HTML5, CSS3, and Bootstrap to ensure cross-device consistency.",
        "Actively participated in daily stand-ups and Agile ceremonies, working closely with the team to deliver assigned features on time."
      ]
    }
  ],
  skills: {
    programming: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["Spring Boot", "Angular", "React.js", "Node.js", "Hibernate"],
    databases: ["MySQL", "Oracle", "MongoDB"],
    tools: ["GitHub", "JIRA", "Jenkins", "Docker", "Kubernetes", "RabbitMQ", "Kafka"],
    cloudAndOthers: ["AWS (S3, Lambda, CloudWatch)", "Azure", "GCP", "Microservices", "Data Structures", "Cloud stack", "ML Concepts"]
  },
  projects: [
    {
      title: "POS Management System",
      tech: "React.js, Spring Boot, MySQL",
      description: "Developed a robust full-stack POS and inventory management system to streamline retail operations and staff administration. Built with a Java/Spring Boot backend secured by JWT authentication and a responsive React.js frontend styled with Tailwind CSS. The application features real-time transaction processing with barcode support, automated inventory and service tracking, and sophisticated role-based access controls. Leveraged RESTful APIs and MySQL for scalable, production-grade data persistence.",
      image: "POS.png",
      link: "https://github.com/LakshmiReddy-Sanikommu/POS-Management"
    },
    {
      title: "Rare Canvas",
      tech: "MERN stack, HTML & CSS",
      description: "An e-commerce web application engineered with a robust Node.js and Express.js backend. The platform leverages a MongoDB Atlas cloud database with Mongoose ODM for secure, seamless user authentication and data management. It features a RESTful API architecture that handles user registration and login flows, integrated tightly with a dynamic frontend to deliver a smooth and responsive shopping experience.",
      image: "/RARE.png",
      link: "https://github.com/LakshmiReddy-Sanikommu/RARE"
    },
    {
      title: "Student Management System",
      tech: "Java, File I/O, MongoDB",
      description: "A modern, full-stack student management application built with Java Spring Boot and plain JavaScript that features secure, role-based dashboards for students and lecturers to seamlessly manage coursework, track assignment progress, and update profiles through a responsive, modern interface.",
      image: "SM.png",
      link: "https://github.com/LakshmiReddy-Sanikommu/StudentManagementSystem"
    }
  ]
};
