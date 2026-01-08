import cloudImg from "@/assets/courses/cloud-computing.jpg";
import cyberImg from "@/assets/courses/cyber-security.png";
import quantomImg from "@/assets/courses/quantom-computing.png";
import qaImg from "@/assets/courses/qa-automation-v2.png";
import embeddedImg from "@/assets/courses/embedded-systems.png";
import aiImg from "@/assets/courses/ai.png";
import pythonImg from "@/assets/courses/python.jpg";
import devopsImg from "@/assets/courses/devops.png";
import analyticsImg from "@/assets/courses/data-analytics-v2.jpg";
import mlImg from "@/assets/courses/machine-learning.jpg";
import dsImg from "@/assets/courses/data-science.jpg";
import javaImg from "@/assets/courses/java-full-stack.png";
import mernImg from "@/assets/courses/MERN.jpg";
import uiuxImg from "@/assets/courses/uiux.jpg";

export interface CourseModule {
    title: string;
    lessons: string[];
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    duration: string;
    level: string;
    trainer: string;
    price: string;
    originalPrice: string;
    rating: number;
    themeColor: string;
    curriculum: CourseModule[];
}

export const coursesData: Course[] = [
    {
        id: 1,
        slug: "data-science",
        title: "Data Science",
        category: "Data Science & AI",
        image: dsImg,
        description: "Analyze large amounts of data to uncover patterns and trends helping in decision-making using Python, R, and ML.",
        fullDescription: "Data Science is the field of analyzing large amounts of data to uncover patterns, insights, and trends that help in decision-making. A Data Science Professional uses tools like Python, R, SQL, and Machine Learning to process and interpret data effectively. Our course prepares you to handle real-world data challenges with industry-standard protocols.",
        duration: "5 Months",
        level: "Beginner",
        trainer: "Ravi Teja",
        price: "₹45,000",
        originalPrice: "₹75,000",
        rating: 5,
        themeColor: "#0EA5E9",
        curriculum: [
            { title: "Module 1 : Python Foundations", lessons: ["Variables & Data Types", "Control Structures", "Functions & Modules"] },
            { title: "Module 2 : Advanced Python", lessons: ["Object Oriented Programming", "File I/O", "Exception Handling"] },
            { title: "Module 3 : Statistics & Probability", lessons: ["Descriptive Stats", "Hypothesis Testing", "Probability Distributions"] },
            { title: "Module 4 : Data Preprocessing", lessons: ["Data Cleaning", "Feature Engineering", "Handling Missing Data"] },
            { title: "Module 5 : Exploratory Data Analysis", lessons: ["NumPy", "Pandas", "Matplotlib & Seaborn"] },
            { title: "Module 6 : SQL for Data Science", lessons: ["Joins & Subqueries", "Aggregations", "Database Normalization"] },
            { title: "Module 7 : Machine Learning - I", lessons: ["Linear Regression", "Logistic Regression", "Decision Trees"] },
            { title: "Module 8 : Machine Learning - II", lessons: ["Random Forests", "SVM", "K-Means Clustering"] },
            { title: "Module 9 : Deep Learning Basics", lessons: ["Neural Networks", "Activation Functions", "Backpropagation"] },
            { title: "Module 10 : Natural Language Processing", lessons: ["Tokenization", "Sentiment Analysis", "NLTK Basics"] },
            { title: "Module 11 : Industrial Projects", lessons: ["Capstone Project", "Resume Review", "Mock Interviews"] }
        ]
    },
    {
        id: 2,
        slug: "cyber-security",
        title: "Cyber Security",
        category: "Cyber Security",
        image: cyberImg,
        description: "Learn to protect systems, networks, and programs from digital attacks using advanced security tools.",
        fullDescription: "In the digital age, cybersecurity is essential for protecting sensitive data and maintaining the integrity of systems. This course covers everything from network security to ethical hacking and risk management.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Dr. Ramesh",
        price: "₹35,000",
        originalPrice: "₹65,000",
        rating: 5,
        themeColor: "#1F2937",
        curriculum: [
            { title: "Module 1 : Network Fundamentals", lessons: ["OSI Model", "TCP/IP Protocol", "Subnetting"] },
            { title: "Module 2 : Cryptography Basics", lessons: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing"] },
            { title: "Module 3 : Linux for Security Owners", lessons: ["CLI Basics", "Permissions", "Shell Scripting"] },
            { title: "Module 4 : Vulnerability Assessment", lessons: ["Nmap Usage", "Scanning Tools", "Reporting"] },
            { title: "Module 5 : Ethical Hacking Basics", lessons: ["Footprinting", "Scanning Networks", "Enumeration"] },
            { title: "Module 6 : Web Application Security", lessons: ["OWASP Top 10", "SQL Injection", "XSS Attacks"] },
            { title: "Module 7 : Network Security Tools", lessons: ["Firewalls", "IDS/IPS", "VPN Concepts"] },
            { title: "Module 8 : Digital Forensics", lessons: ["Evidence Collection", "File System Analysis", "Case Study"] },
            { title: "Module 9 : Governance & Compliance", lessons: ["GDPR Basics", "ISO Standards", "Risk Management"] },
            { title: "Module 10 : Cloud Security", lessons: ["AWS Security", "Azure Identity", "IAM Policies"] },
            { title: "Module 11 : Final Practice Labs", lessons: ["Capture The Flag (CTF)", "OSCP Prep", "Career Guidance"] }
        ]
    },
    {
        id: 3,
        slug: "data-analytics",
        title: "Data Analytics",
        category: "Data Science",
        image: analyticsImg,
        description: "Turn data into insights using SQL, Excel, and Power BI to drive business growth.",
        fullDescription: "Data Analytics involves cleaning, analyzing, and interpreting complex data to help businesses make better decisions. You'll learn the most in-demand tools including Power BI and SQL.",
        duration: "4 Months",
        level: "Beginner",
        trainer: "Suresh",
        price: "₹35,000",
        originalPrice: "₹60,000",
        rating: 5,
        themeColor: "#2563EB",
        curriculum: [
            { title: "Module 1 : Advanced Excel", lessons: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Macro Basics"] },
            { title: "Module 2 : SQL Fundamentals", lessons: ["SELECT Statements", "WHERE Clause", "Basic Joins"] },
            { title: "Module 3 : Intermediate SQL", lessons: ["Group By", "Having", "Subqueries"] },
            { title: "Module 4 : Data Visualisation (Power BI)", lessons: ["Creating Dashboards", "DAX Formulas", "Report Sharing"] },
            { title: "Module 5 : Python for Analytics", lessons: ["NumPy Arrays", "Pandas DataFrames", "Data Wrangling"] },
            { title: "Module 6 : Statistics for Analytics", lessons: ["Mean/Median/Mode", "Variance", "Correlation"] },
            { title: "Module 7 : Data Storytelling", lessons: ["Chart Selection", "Presentation Skills", "Reporting Insights"] },
            { title: "Module 8 : Business Intelligence", lessons: ["ETL Process", "Data Modeling", "OLAP vs OLTP"] },
            { title: "Module 9 : Tableau Basics", lessons: ["Calculated Fields", "Maps", "Story Points"] },
            { title: "Module 10 : Big Data Concepts", lessons: ["Hadoop Basics", "NoSQL Intro", "Cloud Analytics"] },
            { title: "Module 11 : Real-time Analytics Project", lessons: ["Final Project", "Dashboard Building", "Mock Interviews"] }
        ]
    },
    {
        id: 4,
        slug: "devops",
        title: "DevOps",
        category: "Cloud & DevOps",
        image: devopsImg,
        description: "Bridge the gap between development and operations using CI/CD pipelines and cloud infrastructure.",
        fullDescription: "DevOps is a set of practices that combines software development and IT operations. This course covers tools like Docker, Kubernetes, and Jenkins.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Vikram",
        price: "₹35,000",
        originalPrice: "₹70,000",
        rating: 5,
        themeColor: "#F97316",
        curriculum: [
            { title: "Module 1 : Linux & CLI", lessons: ["File System", "Process Management", "Package Managers"] },
            { title: "Module 2 : Version Control (Git)", lessons: ["Branching", "Git Flow", "Cherry-pick"] },
            { title: "Module 3 : Containerization (Docker)", lessons: ["Images & Containers", "Docker Compose", "Docker Hub"] },
            { title: "Module 4 : CI/CD Pipelines (Jenkins)", lessons: ["Pipeline as Code", "Plugins", "Shared Libraries"] },
            { title: "Module 5 : Infrastructure as Code (Terraform)", lessons: ["State Files", "Providers", "Modules"] },
            { title: "Module 6 : Configuration Management (Ansible)", lessons: ["Playbooks", "Inventory Management", "Roles"] },
            { title: "Module 7 : Orchestration (Kubernetes)", lessons: ["Pods & Nodes", "Services", "Helm Charts"] },
            { title: "Module 8 : Monitoring & Logging (ELK)", lessons: ["Prometheus", "Grafana", "Logstash"] },
            { title: "Module 9 : Cloud Platform (AWS)", lessons: ["EC2 & S3", "IAM", "VPC Networking"] },
            { title: "Module 10 : DevSecOps Basics", lessons: ["Snyk", "SonarQube", "Security Scanning"] },
            { title: "Module 11 : Production Deployment", lessons: ["Zero Downtime", "Blue-Green Deployment", "Interview Tasks"] }
        ]
    },
    {
        id: 5,
        slug: "multi-cloud-engineering",
        title: "Multi Cloud Engineering",
        category: "Cloud Computing",
        image: cloudImg,
        description: "Master multiple cloud platforms like AWS, Azure, and GCP for building scalable infrastructure.",
        fullDescription: "Learn how to manage and deploy applications across multiple cloud service providers to ensure high availability and cost-efficiency.",
        duration: "6 Months",
        level: "Advanced",
        trainer: "Anil",
        price: "₹35,000",
        originalPrice: "₹80,000",
        rating: 5,
        themeColor: "#38BDF8",
        curriculum: [
            { title: "Module 1 : AWS Solutions", lessons: ["EC2 Instances", "Lambda Functions", "S3 Storage"] },
            { title: "Module 2 : Azure Administration", lessons: ["Active Directory", "VM Scale Sets", "Blob Storage"] },
            { title: "Module 3 : Google Cloud Platform", lessons: ["Compute Engine", "BigQuery", "App Engine"] },
            { title: "Module 4 : Cloud Architecture", lessons: ["Highly Available Design", "Scaling", "Failover Strategies"] },
            { title: "Module 5 : Cloud Storage Solutions", lessons: ["Block vs Object", "EBS/EFS", "Managed Databases"] },
            { title: "Module 6 : Serverless Computing", lessons: ["FaaS Intro", "Triggers", "Cloud Functions"] },
            { title: "Module 7 : Multi-Cloud Security", lessons: ["Cross-Cloud IAM", "Single Sign-On", "Encryption"] },
            { title: "Module 8 : Network Connectivity", lessons: ["VPC Peering", "VPN Gateway", "Direct Connect"] },
            { title: "Module 9 : Cost Management", lessons: ["Budgets", "Spot Instances", "Reserved Instances"] },
            { title: "Module 10 : Migration Strategies", lessons: ["Lift and Shift", "Refactoring", "Database Migration"] },
            { title: "Module 11 : Hybrid Cloud Practice", lessons: ["On-prem Connect", "Final Certification Prep", "Global Case Study"] }
        ]
    },
    {
        id: 6,
        slug: "embedded-systems",
        title: "Embedded Systems",
        category: "Hardware & Electronics",
        image: embeddedImg,
        description: "Design and develop software for embedded controllers and hardware systems.",
        fullDescription: "A deep dive into microcontroller programming, real-time operating systems (RTOS), and hardware-software integration.",
        duration: "5 Months",
        level: "Intermediate",
        trainer: "Prakash",
        price: "₹35,000",
        originalPrice: "₹65,000",
        rating: 5,
        themeColor: "#065F46",
        curriculum: [
            { title: "Module 1 : Introduction to Microcontrollers", lessons: ["8051 Architecture", "Embedded C basics"] },
            { title: "Module 2 : ARM Cortex Basics", lessons: ["Instruction Set", "Registers", "Memory Layout"] },
            { title: "Module 3 : Input/Output Programming", lessons: ["GPIO Control", "Interrupt Handling", "Timer Basics"] },
            { title: "Module 4 : Serial Communication", lessons: ["UART", "I2C Protocol", "SPI Protocol"] },
            { title: "Module 5 : RTOS Concepts", lessons: ["Task Management", "Scheduling", "Semaphores"] },
            { title: "Module 6 : Sensors & Actuators", lessons: ["ADC Basics", "PWM Control", "LCD Interfacing"] },
            { title: "Module 7 : Device Drivers", lessons: ["Writing Basic Drivers", "Kernel Programming Intro"] },
            { title: "Module 8 : Hardware Debugging", lessons: ["JTAG/SWD", "Logic Analyzers", "Oscilloscopes"] },
            { title: "Module 9 : IoT Fundamentals", lessons: ["WiFi/Bluetooth Modules", "MQTT Protocol"] },
            { title: "Module 10 : PCB Design Basics", lessons: ["Circuit Design", "Layout", "Soldering Prep"] },
            { title: "Module 11 : Robotics Project", lessons: ["Final Hardware Project", "Troubleshooting", "Industry Standards"] }
        ]
    },
    {
        id: 7,
        slug: "java-full-stack",
        title: "Java Full Stack",
        category: "Web Development",
        image: javaImg,
        description: "Build robust web applications from scratch using Java, Spring Boot, and React.",
        fullDescription: "Become an expert in end-to-end web development with the most widely used enterprise technologies.",
        duration: "6 Months",
        level: "Advanced",
        trainer: "Kalyan",
        price: "₹35,000",
        originalPrice: "₹75,000",
        rating: 5,
        themeColor: "#B91C1C",
        curriculum: [
            { title: "Module 1 : Core Java", lessons: ["OOPs Concepts", "Collections Framework", "Streams API"] },
            { title: "Module 2 : Java Database Connectivity", lessons: ["JDBC API", "SQL with Java", "Transactions"] },
            { title: "Module 3 : Web Development Basics", lessons: ["HTML & CSS", "JavaScript Essentials", "Bootstrap"] },
            { title: "Module 4 : Spring Framework", lessons: ["Dependency Injection", "AOP", "Spring Modules"] },
            { title: "Module 5 : Spring Boot", lessons: ["Auto Configuration", "Starters", "DevTools"] },
            { title: "Module 6 : RESTful Web Services", lessons: ["JSON API Design", "Spring MVC", "Postman Testing"] },
            { title: "Module 7 : Persistence with Hibernate", lessons: ["JPA Basics", "Entity Mapping", "Spring Data JPA"] },
            { title: "Module 8 : Frontend with React", lessons: ["Components & Props", "Hooks", "React Router"] },
            { title: "Module 9 : Testing & Security", lessons: ["JUnit/Mockito", "Spring Security", "JWT Auth"] },
            { title: "Module 10 : Deployment & CI/CD", lessons: ["Maven", "Docker Basics", "Jenkins pipeline"] },
            { title: "Module 11 : Enterprise Project", lessons: ["Real-time Application", "Code Review", "Resume & Jobs"] }
        ]
    },
    {
        id: 8,
        slug: "mern-stack",
        title: "MERN Stack",
        category: "Web Development",
        image: mernImg,
        description: "Master modern web development with MongoDB, Express.js, React, and Node.js.",
        fullDescription: "Learn to build high-performance web applications using the popular JavaScript stack.",
        duration: "5 Months",
        level: "Intermediate",
        trainer: "Ravi",
        price: "₹35,000",
        originalPrice: "₹70,000",
        rating: 5,
        themeColor: "#10B981",
        curriculum: [
            { title: "Module 1 : JavaScript Basics", lessons: ["Variables & Functions", "Arrow Functions", "Array Methods"] },
            { title: "Module 2 : Advanced JavaScript", lessons: ["Promises & Async/Await", "Closures", "DOM Manipulation"] },
            { title: "Module 3 : Frontend with React", lessons: ["JSX & Components", "State Management", "Hooks API"] },
            { title: "Module 4 : React Ecosystem", lessons: ["Redux Toolkit", "Context API", "React Hooks"] },
            { title: "Module 5 : Backend with Node.js", lessons: ["Event Loop", "Filesystem Module", "NPM Ecosystem"] },
            { title: "Module 6 : Server with Express", lessons: ["Routing", "Middleware", "Error Handling"] },
            { title: "Module 7 : MongoDB Database", lessons: ["CRUD Operations", "Aggregation Pipeline", "Mongoose ODM"] },
            { title: "Module 8 : API Integration", lessons: ["Axios usage", "Fetch API", "Restful Standards"] },
            { title: "Module 9 : Authentication & Security", lessons: ["JWT Tokens", "Bcrypt Hashing", "Role Management"] },
            { title: "Module 10 : Hosting & Git", lessons: ["GitHub Actions", "Netlify/Vercel", "Heroku/Railway"] },
            { title: "Module 11 : Portfolio Project", lessons: ["Full Stack E-commerce", "Deployment", "Mock Interviews"] }
        ]
    },
    {
        id: 9,
        slug: "multi-cloud-consultant",
        title: "Multi Cloud Consultant",
        category: "Cloud Computing",
        image: cloudImg,
        description: "Advise businesses on cloud strategies across multiple platforms for optimal performance.",
        fullDescription: "Develop consulting skills to help organizations choose and implement the best cloud solutions.",
        duration: "4 Months",
        level: "Advanced",
        trainer: "Siva",
        price: "₹35,000",
        originalPrice: "₹75,000",
        rating: 5,
        themeColor: "#1E40AF",
        curriculum: [
            { title: "Module 1 : Business Case Development", lessons: ["KPI Definition", "TCO Calculation", "RoI Case"] },
            { title: "Module 2 : Multi-Cloud Governance", lessons: ["Policy Definition", "Resource Tagging", "Budget Control"] },
            { title: "Module 3 : Multi-Cloud Security", lessons: ["WAF Strategies", "Compliance Checks", "Auditing"] },
            { title: "Module 4 : Migration Roadmap", lessons: ["Application Discovery", "Migration Wave Planning", "Refactoring"] },
            { title: "Module 5 : Hybrid Connectivity", lessons: ["Direct Connect", "Express Route", "Global Network Hubs"] },
            { title: "Module 6 : Operational Excellence", lessons: ["CloudOps Intro", "Incident Management", "Automation"] },
            { title: "Module 7 : Multi-Cloud Networking", lessons: ["Route Table Management", "Peering Strategies", "Traffic Shaping"] },
            { title: "Module 8 : Cloud Native Design", lessons: ["Microservices", "Event Driven", "Container Strategies"] },
            { title: "Module 9 : Serverless Strategies", lessons: ["Function Lifecycle", "Performance Tuning"] },
            { title: "Module 10 : Sustainability in Cloud", lessons: ["Carbon Tracking", "Resource Efficiency"] },
            { title: "Module 11 : Global Consulting Lab", lessons: ["Real world Consultancy simulated", "Executive Presentation", "Career Coaching"] }
        ]
    },
    {
        id: 10,
        slug: "python-full-stack",
        title: "Python Full Stack",
        category: "Web Development",
        image: pythonImg,
        description: "Build scalable web applications using Python, Django, and modern frontend frameworks.",
        fullDescription: "Master Python for both backend and frontend development, along with database management.",
        duration: "5 Months",
        level: "Intermediate",
        trainer: "Arjun",
        price: "₹35,000",
        originalPrice: "₹65,000",
        rating: 5,
        themeColor: "#FACC15",
        curriculum: [
            { title: "Module 1 : Python Basics", lessons: ["Data Types", "Flow Control", "Functions"] },
            { title: "Module 2 : Object Oriented Python", lessons: ["Classes & Objects", "Inheritance", "Magic Methods"] },
            { title: "Module 3 : Database with SQL", lessons: ["PostgreSQL", "SQLite", "Basic Queries"] },
            { title: "Module 4 : Web Development Basics", lessons: ["HTML/CSS", "JavaScript Basics", "DOM"] },
            { title: "Module 5 : Django Fundamentals", lessons: ["MVT Architecture", "URLs & Views", "Templates"] },
            { title: "Module 6 : Django Forms & Admin", lessons: ["Model Forms", "Custom Admin Panel"] },
            { title: "Module 7 : Django REST Framework", lessons: ["Serializers", "Viewsets", "Authentication"] },
            { title: "Module 8 : Frontend Integration", lessons: ["React basics", "React-Django Communication"] },
            { title: "Module 9 : Testing with Pytest", lessons: ["Unit Tests", "Integration Tests"] },
            { title: "Module 10 : Deployment", lessons: ["Django on Heroku/AWS", "Gunicorn & Nginx"] },
            { title: "Module 11 : Full Stack Social App", lessons: ["Real-time Interaction", "Final project", "Job Readiness"] }
        ]
    },
    {
        id: 11,
        slug: "quantum-computing",
        title: "Quantum Computing",
        category: "Advanced Technology",
        image: quantomImg,
        description: "Explore the future of computing with quantum mechanics and quantum algorithms.",
        fullDescription: "A comprehensive introduction to quantum gates, circuits, and programming using Qiskit.",
        duration: "6 Months",
        level: "Advanced",
        trainer: "Srinivas",
        price: "₹35,000",
        originalPrice: "₹90,000",
        rating: 5,
        themeColor: "#7C3AED",
        curriculum: [
            { title: "Module 1 : Mathematical Foundations", lessons: ["Linear Algebra", "Complex Numbers", "Tensor Products"] },
            { title: "Module 2 : Quantum Mechanics Basics", lessons: ["Superposition", "Entanglement", "Bra-ket notation"] },
            { title: "Module 3 : Qubits & Gates", lessons: ["Pauli Gates", "Hadamard Gate", "Phase Gates"] },
            { title: "Module 4 : Multi-Qubit Systems", lessons: ["CNOT Gates", "Bell States", "No-Cloning Theorem"] },
            { title: "Module 5 : Quantum Circuits", lessons: ["Circuit Design", "Measurement", "Error Mitigation Prep"] },
            { title: "Module 6 : Quantum Algorithms - I", lessons: ["Deutsch-Jozsa Algorithm", "Bernstein-Vazirani"] },
            { title: "Module 7 : Quantum Algorithms - II", lessons: ["Grover's Search", "Shor's Algorithm Concepts"] },
            { title: "Module 8 : Quantum Programming (Qiskit)", lessons: ["Executing on Hardware", "Simulator use"] },
            { title: "Module 9 : Quantum Cryptography", lessons: ["BB84 Protocol", "Key Distribution"] },
            { title: "Module 10 : Quantum Computing Apps", lessons: ["Chemistry Simulation", "Optimization Problems"] },
            { title: "Module 11 : Future of Quantum", lessons: ["Hardware Landscape", "Final Course Project", "Researcher Guide"] }
        ]
    },
    {
        id: 12,
        slug: "ui-ux-design",
        title: "UI/UX Design",
        category: "Design",
        image: uiuxImg,
        description: "Design beautiful and intuitive user interfaces and user experiences.",
        fullDescription: "Learn design thinking, wireframing, prototyping, and user testing using tools like Figma.",
        duration: "3 Months",
        level: "Beginner",
        trainer: "Divya",
        price: "₹35,000",
        originalPrice: "₹55,000",
        rating: 5,
        themeColor: "#EC4899",
        curriculum: [
            { title: "Module 1 : Introduction to UI/UX", lessons: ["Design Thinking", "User Psychology", "The Design Process"] },
            { title: "Module 2 : UX Research", lessons: ["User Personas", "Surveys & Interviews", "Competitive Analysis"] },
            { title: "Module 3 : Information Architecture", lessons: ["User Flows", "Sitemaps", "Content Strategy"] },
            { title: "Module 4 : Wireframing (Figma)", lessons: ["Low-fidelty Sketches", "Digital Wireframes"] },
            { title: "Module 5 : Visual Design Principles", lessons: ["Typography", "Color Theory", "Grid Systems"] },
            { title: "Module 6 : Working with Tools (Figma/Adobe)", lessons: ["Components", "Auto Layout", "Design Systems"] },
            { title: "Module 7 : Prototyping", lessons: ["Interactive Flows", "Micro-interactions", "Animation Basics"] },
            { title: "Module 8 : Accessibility in Design", lessons: ["WCAG Guidelines", "Inclusive Design", "Contrast Ratios"] },
            { title: "Module 9 : User Testing", lessons: ["Usability Testing", "Feedback Loops", "Heatmaps Concepts"] },
            { title: "Module 10 : Portfolio Building", lessons: ["Case Study Writing", "Behance/Dribbble Setup"] },
            { title: "Module 11 : Design Industry Prep", lessons: ["Portfolio Review", "Design Presentations", "Interview Prep"] }
        ]
    },
    {
        id: 13,
        slug: "qa-automation",
        title: "QA Automation",
        category: "Software Testing",
        image: qaImg,
        description: "Automate software testing using Selenium, Java, and modern testing frameworks.",
        fullDescription: "Master automated testing to ensure software quality and speed up development cycles.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Harish",
        price: "₹35,000",
        originalPrice: "₹60,000",
        rating: 5,
        themeColor: "#0F766E",
        curriculum: [
            { title: "Module 1 : Manual Testing Basics", lessons: ["Test Scenarios", "Bug Life Cycle", "Requirement Analysis"] },
            { title: "Module 2 : Java for Testers", lessons: ["Basics for Automation", "OOPs for Testing"] },
            { title: "Module 3 : Selenium WebDriver", lessons: ["Locators", "Element Interactions", "Waits"] },
            { title: "Module 4 : TestNG Framework", lessons: ["Annotations", "Parallel Execution", "Assertions"] },
            { title: "Module 5 : Page Object Model (POM)", lessons: ["Design Patterns", "Page Factories"] },
            { title: "Module 6 : Data Driven Testing", lessons: ["Excel Integration", "JSON/XML Data"] },
            { title: "Module 7 : API Automation", lessons: ["Rest Assured", "HTTP Methods", "Status Codes"] },
            { title: "Module 8 : CI/CD Integration", lessons: ["Jenkins for QA", "GitHub Actions"] },
            { title: "Module 9 : Behavior Driven Dev (Cucumber)", lessons: ["Gherkin Syntax", "Feature Files"] },
            { title: "Module 10 : Mobile Testing basics", lessons: ["Appium Intro", "Device Testing"] },
            { title: "Module 11 : Final Framework Build", lessons: ["Custom Framework lab", "Reporting setup", "Job Prep"] }
        ]
    },
    {
        id: 14,
        slug: "ai-ml",
        title: "Artificial Intelligence and Machine Learning",
        category: "Data Science & AI",
        image: aiImg,
        description: "Combine AI and ML to build intelligent systems that learn and adapt.",
        fullDescription: "Dive deep into neural networks, deep learning, and advanced machine learning algorithms.",
        duration: "6 Months",
        level: "Advanced",
        trainer: "Ravi Teja",
        price: "₹35,000",
        originalPrice: "₹80,000",
        rating: 5,
        themeColor: "#6C63FF",
        curriculum: [
            { title: "Module 1 : Mathematical Refresh", lessons: ["Calculus", "Linear Algebra for AI", "Probabilistic Models"] },
            { title: "Module 2 : Machine Learning Advance", lessons: ["Ensemble Methods", "Boosting/Bagging", "Gradient Descent"] },
            { title: "Module 3 : Neural Network Architecture", lessons: ["Perceptrons", "MLP", "Weight Initialization"] },
            { title: "Module 4 : Deep Learning (TensorFlow)", lessons: ["Building Models", "Keras API", "Loss Functions"] },
            { title: "Module 5 : Convolutional Neural Networks", lessons: ["Image Classification", "Filters & Pooling", "Transfer Learning"] },
            { title: "Module 6 : Recurrent Neural Networks", lessons: ["Sequence Data", "LSTM & GRU", "Time Series Forecast"] },
            { title: "Module 7 : NLP and Transformers", lessons: ["BERT Basics", "Attention Mechanisms", "LLM Intro"] },
            { title: "Module 8 : Computer Vision", lessons: ["Object Detection", "Image Segmentation", "OpenCV"] },
            { title: "Module 9 : Reinforcement Learning", lessons: ["Q-Learning", "Policy Gradients", "Agents"] },
            { title: "Module 10 : AI Ethics & Deployment", lessons: ["Bias & Fairness", "Model Serving with Flask"] },
            { title: "Module 11 : Advanced AI Capstone", lessons: ["Complex System Design", "Research Guidance", "Hire-ready Projects"] }
        ]
    }
];
