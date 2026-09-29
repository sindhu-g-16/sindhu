export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  keyInsights?: string[];
  liveStatus: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    iconName: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Gunturu Sindhu",
    role: "Data Science Student & Aspiring Tech Builder",
    headline: "Transforming data into insights & building impactful community solutions.",
    bio: "I’m a Data Science student who enjoys working with data, learning new technologies, and building useful projects. I’m currently improving my skills in Python, AI, and data analytics.",
    email: "g.sindhuu.16@gmail.com",
    linkedin: "https://www.linkedin.com/in/gunturu-sindhu-a32511437?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    initials: "GS",
    statusBadge: "Available for Internships & Collaborations",
    stats: [
      { value: "9.8", label: "SSC CGPA", context: "Brilliant Grammar High School" },
      { value: "979", label: "Intermediate Marks", context: "Narayana Junior College" },
      { value: "B.Tech", label: "Data Science", context: "Undergraduate Pursuit" },
      { value: "2", label: "Featured Projects", context: "CivicsFix & UX Analytics" },
    ],
  },

  skills: [
    {
      name: "SQL",
      category: "core",
      experience: "Proficient",
      description: "Writing relational queries, joins, aggregations, data filtering, and schema modeling.",
      keyTopics: ["Complex Joins", "Aggregations & Group By", "Subqueries", "Relational Integrity", "Table Schemas"],
    },
    {
      name: "Git",
      category: "core",
      experience: "Proficient",
      description: "Distributed version control, branching strategies, commit cleanliness, and repository management.",
      keyTopics: ["Branch & Merge", "Commit History", "Conflict Resolution", "Remote Repositories", "Collaboration"],
    },
    {
      name: "C Programming",
      category: "core",
      experience: "Foundational",
      description: "Structured programming, memory management principles, pointers, and core data structures.",
      keyTopics: ["Pointers & Memory", "Control Structures", "Arrays & Strings", "Data Structures", "Algorithm Basics"],
    },
    {
      name: "Python",
      category: "growth",
      experience: "Actively Developing",
      description: "Scripting, algorithmic logic, data processing with Pandas and NumPy, data transformation.",
      keyTopics: ["Data Manipulation", "Pandas & NumPy", "Automation Scripts", "Logic Building", "Jupyter Workflows"],
    },
    {
      name: "Artificial Intelligence",
      category: "growth",
      experience: "Exploring & Learning",
      description: "Understanding fundamental AI concepts, machine learning pipelines, and smart application logic.",
      keyTopics: ["ML Foundations", "Prompt Engineering", "Data Preprocessing", "Evaluation Metrics", "Model Exploration"],
    },
    {
      name: "Data Analytics",
      category: "growth",
      experience: "Actively Developing",
      description: "Exploratory data analysis (EDA), pattern discovery, UX metric evaluation, and visual reporting.",
      keyTopics: ["Trend Analysis", "UX Evaluation", "Dashboard Layouts", "Feature Insights", "Data Storytelling"],
    },
  ],

  projects: [
    {
      id: "civicsfix",
      title: "CivicsFix",
      subtitle: "Civic Issue Reporting Platform",
      shortDescription: "A small web project designed to help users report and track civic issues in their local community.",
      fullDescription: "CivicsFix empowers residents to identify, report, and monitor civic problems—such as damaged streetlights, road potholes, improper waste disposal, and municipal water leaks—directly through a clean, intuitive web portal. Built to bridge communication between active citizens and local civic resolution teams.",
      image: "/src/assets/images/civicsfix_preview_1790674815402.jpg",
      category: "Web & Civic Tech",
      tags: ["SQL", "Git", "Web Fundamentals", "Civic Tech", "Community Impact"],
      liveStatus: "Active Prototype",
      metrics: [
        { label: "Issue Categories", value: "6 Types" },
        { label: "Status Pipeline", value: "4 Stages" },
        { label: "Target Audience", value: "Local Citizens" },
      ],
      problem: "Citizens often encounter local neighborhood infrastructure issues (potholes, garbage, broken streetlights) but lack an easy, transparent way to report and track resolution progress without bureaucratic friction.",
      solution: "CivicsFix provides a streamlined submission flow with categorization, location tagging, status updates (Reported, In Review, In Progress, Resolved), and community visibility.",
      features: [
        "Interactive issue submission form with photo upload and location tagging",
        "Transparent 4-stage resolution tracking pipeline",
        "Categorized issue directory (Roads, Lighting, Sanitation, Water)",
        "Structured SQL data schema for reliable incident logs and user reports",
        "Clean, responsive UI with purple and coral theme highlights for high legibility",
      ],
      technologies: ["SQL (Relational Schema)", "Git & GitHub", "HTML5 & Modern CSS", "JavaScript & DOM Integration"],
      keyInsights: [
        "Transparent tracking significantly increases citizen participation and trust.",
        "Clear categorization reduces triage time for municipal or maintenance staff.",
      ],
    },
    {
      id: "job-website-analysis",
      title: "Job Website Analysis",
      subtitle: "Job Portal Evaluation & Insights",
      shortDescription: "An analysis project focused on studying a job-related website, its features, user experience, and overall functionality.",
      fullDescription: "A comprehensive analytical study investigating real-world job portal architectures, user search behavior, UX friction points, and recommendation algorithms. By evaluating applicant workflows from initial search to final submission, the project delivers actionable data insights on maximizing user retention and reducing application drop-offs.",
      image: "/src/assets/images/job_analysis_preview_1790674829914.jpg",
      category: "Data & UX Analytics",
      tags: ["Data Analytics", "UX Research", "Feature Evaluation", "Information Architecture"],
      liveStatus: "Research Study",
      metrics: [
        { label: "User Flows Evaluated", value: "5 Journeys" },
        { label: "Friction Hotspots", value: "4 Key Gaps" },
        { label: "Recommendation Roadmap", value: "6 Solutions" },
      ],
      problem: "Many job seekers experience high drop-off rates due to cumbersome multi-page forms, irrelevant search filters, lack of salary transparency, and poor mobile responsiveness on conventional job boards.",
      solution: "Conducted an in-depth heuristic evaluation, comparative analysis, and user journey audit to formulate concrete UX improvements and data-driven recommendations.",
      features: [
        "Comprehensive heuristic evaluation across Search, Job Cards, and Application Flows",
        "Identification of high-friction drop-off points during resume upload and questionnaire steps",
        "Comparative benchmark against leading talent marketplaces",
        "Synthesized UX roadmap emphasizing smart filtering, transparent compensation data, and 1-click apply",
        "Structured data presentation with clean comparative charts and usability rubrics",
      ],
      technologies: ["Data Analytics & Synthesis", "UX Heuristic Audit", "User Journey Mapping", "Information Architecture Analysis"],
      keyInsights: [
        "Unclear salary bands and redundant profile questions contribute to over 60% of application drop-offs.",
        "Refining search keyword relevance and location radii yields dramatically higher user satisfaction.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Data Science",
      institution: "Undergraduate Engineering Program",
      scoreLabel: "Status",
      scoreValue: "Currently Pursuing",
      period: "Present",
      status: "In Progress",
      highlights: [
        "Core study in Data Science, Relational Database Management Systems, Data Structures, and Probability & Statistics",
        "Active technical exploration in Python programming, machine learning basics, and analytical project development",
        "Building hands-on academic projects combining software engineering practices with data workflows",
      ],
    },
    {
      degree: "Intermediate Education (Class XII / MPC)",
      institution: "Narayana Junior College",
      scoreLabel: "Total Marks",
      scoreValue: "979 / 1000",
      period: "Completed",
      status: "Distinction (97.9%)",
      highlights: [
        "Achieved an exceptional academic score of 979 marks reflecting deep consistency in Mathematics, Physics, and Chemistry",
        "Developed rigorous analytical and quantitative problem-solving foundations",
        "Recognized for top-tier academic performance in junior college cohort",
      ],
    },
    {
      degree: "SSC Board Examination (Class X)",
      institution: "Brilliant Grammar High School",
      scoreLabel: "Cumulative GPA",
      scoreValue: "9.8 / 10.0",
      period: "Completed",
      status: "Outstanding Merit",
      highlights: [
        "Secured a near-perfect 9.8 CGPA across all core subjects and scientific disciplines",
        "Built a strong foundation in mathematics, logical reasoning, and computer basics",
        "Active participant in science exhibitions, academic challenges, and school leadership activities",
      ],
    },
  ],
};
