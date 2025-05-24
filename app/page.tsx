"use client";

import React, { useState, useEffect } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useRef } from 'react';
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin } from "lucide-react";
import { TooltipProps } from 'recharts';
import { Analytics } from "@vercel/analytics/next"

const projects = [
  {
    title: "Real-Time Fraud Detection System",
    desc:
      "Designed an end-to-end real-time fraud detection pipeline using Kafka, Spark Streaming, and MongoDB. Integrated Prometheus & Grafana for system monitoring and alerting to ensure high availability and quick response.",
    link: "https://github.com/Ganasekhar-gif/real-time-credit-card-fraud-detection-system.git",
  },
  {
    title: "Multi-Disease Detection with Deep Learning",
    desc:
      "Developed a medical image classification system using VGG16 to detect multiple diseases from chest X-rays and other clinical images, enabling rapid and accurate diagnosis.",
    link: "https://github.com/Ganasekhar-gif/multi-disease-detection.git",
  },
  {
    title: "Smart Supply Chain Optimization",
    desc:
      "Built a decision-making system using linear programming and machine learning to optimize logistics, reduce transportation costs, and balance inventory across distribution networks.",
    link: "https://github.com/Ganasekhar-gif/supply_chain_optimization.git",
  },
  {
    title: "MCP AI Ed-Tech Assistant",
    desc:
      "Engineered an AI-powered educational chatbot using LLMs and NLP that personalizes content and answers student queries, improving accessibility to quality education.",
    link: "https://github.com/Ganasekhar-gif/mcp-edtech-agent.git",
  },
  {
    title: "Internship Recommendation Agent",
    desc:
      "Created an intelligent system that analyzes resumes, skillsets, and interests to recommend personalized internships using machine learning and web scraping.",
    link: "https://github.com/Ganasekhar-gif/Internship_Hunting_Agent.git",
  },
];

const experience = [
  {
    title: "AI Transformative Learning Intern",
    org: "Microsoft & Edunet Foundation",
    desc:
      "Collaborated on AI-powered applications and streaming ML workflows. Gained hands-on experience deploying scalable, intelligent systems aligned with industrial best practices.",
  },
  {
    title: "Data Analytics Intern",
    org: "Edunet Foundation",
    desc:
      "Analyzed large-scale datasets using Pandas, Spark & LLMs. Delivered actionable insights through preprocessing, visualization, and exploratory data analysis.",
  },
  {
    title: "Android Developer Intern",
    org: "Internslite",
    desc:
      "Built modular Android applications with intuitive UIs using Java and XML. Enhanced user experience through responsive design and optimized app performance.",
  },
];

const oss = [
  {
    title: "Braindecode Contributor",
    desc:
      "Developed dynamic tag filtering and fixed dropdown bugs, enhancing UI interactivity and accuracy. Improved frontend docs with reStructuredText.",
    link: "https://github.com/braindecode/braindecode/pull/718",
  },
  {
    title: "MNE-Python Contributor",
    desc:
      "Authored a merged tutorial to create MNE core objects (Info, Epochs, Evoked) from NumPy. Enabled EEG simulation and visualization for education and testing.",
    link: "https://github.com/Ganasekhar-gif/mne-python/pull/1",
  },
  {
    title: "ICA Benchmarking – MNE-Python",
    desc:
      "Benchmarked FastICA vs. Infomax on noisy MEG data. Improved EOG artifact clarity and interpretability. Refined metrics and examples for enhanced learning.",
    link: "https://github.com/mne-tools/mne-python/pull/13215",
  },
];


const skillData = {
  "Data Science": [
    { name: "Python", level: "Expert" },
    { name: "Pandas", level: "Expert" },
    { name: "NumPy", level: "Expert" },
    { name: "SQL", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Matplotlib", level: "Intermediate" },
    { name: "Seaborn", level: "Intermediate" },
    { name: "Scikit-learn", level: "Advanced" },
    { name: "StatsModels", level: "Beginner" },  
    { name: "Excel", level: "Intermediate" }     
  ],

  "AI Frameworks": [
    { name: "Machine Learning", level: "Expert" },
    { name: "Deep Learning", level: "Advanced" },
    { name: "NLP", level: "Advanced" },
    { name: "LLMs", level: "Intermediate" },
    { name: "AI Agents", level: "Intermediate" },
    { name: "Langchain", level: "Beginner" },
    { name: "PyTorch", level: "Intermediate" },    
    { name: "TensorFlow", level: "Beginner" },      
    { name: "Transformers (Hugging Face)", level: "Intermediate" } 
  ],

  "Technologies & Tools": [
    { name: "Kafka", level: "Intermediate" },
    { name: "Spark", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Kubernetes", level: "Beginner" },
    { name: "Git", level: "Expert" },
    { name: "MLOps", level: "Intermediate" },
    { name: "MCP", level: "Intermediate" },
    { name: "Linux", level: "Intermediate" },       
    { name: "VS Code", level: "Intermediate" },      
    { name: "Jupyter Notebook", level: "Expert" }   
  ]
};

const levelToValue = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
} as const;

const valueToLevel = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
  4: "Expert",
} as const;

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-black">
        <p><strong>{payload[0].name}</strong></p>
        <p>Proficiency: <strong>{valueToLevel[value as keyof typeof valueToLevel]}</strong></p>
      </div>
    );
  }
  return null;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const testimonials = [
  {
    name: "Dr. Arjun Reddy",
    title: "AI Researcher, Edunet Foundation",
    quote:
      "Ganasekhar's ability to integrate real-time ML systems with ease is phenomenal. A true asset to any team.",
  },
  {
    name: "Priya Sharma",
    title: "Project Mentor, Internslite",
    quote:
      "He always exceeded expectations, whether optimizing Android apps or solving complex data tasks.",
  },
];

const certificates = [
  {
    title: "Microsoft AI Fundamentals",
    desc: "Gained foundational knowledge in AI concepts, responsible AI, and real-world applications of Azure AI services.",
    link: "https://drive.google.com/file/d/1XeQxB4jreSQ0PVueFQDUFSYUQtNpQj1W/view",
    image: "/microsoft-cert.png",
    logo: "/microsoft-logo.png", 
  },
  {
    title: "Data Analytics Professional",
    desc: "Mastered data wrangling, visualization, and storytelling using tools like Pandas, SQL, and Excel. Aligned with AICTE & VOIS Tech Program.",
    link: "https://drive.google.com/file/d/1jzdOffrz2LGrQg5EOudEfvLcl4FDzA9b/view",
    image: "/analytics-cert.png",
    logo: "/vi-logo.png", 
  },
];


interface Project {
  title: string;
  desc: string;
  link: string;
}

interface Experience {
  title: string;
  org: string;
  desc: string;
}

interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

const typewriterTexts = [
  "Hi, I'm Ganasekhar Kalla — curious mind, driven by data.",
  "Struggling to scale your AI system? Let me help you build it.",
  "I'm a Data Scientist turning real-time data into real-world impact.",
  "From ML models to MLOps pipelines — I bridge prototypes to production.",
  "Need insights that drive action? I turn data into decisions.",
  "I build AI solutions that don't just work — they scale, adapt, and deliver.",
  "Why just visualize data when you can understand it deeply?",
  "Passionate contributor to open-source AI — let's innovate together.",
];

const interests = [
  "I'm fascinated by the power of data to tell stories, uncover patterns, and drive meaningful decisions.",
  "My passion lies in solving real-world problems with data science, guided by logic, creativity, and curiosity.",
  "I'm on a mission to build intelligent systems where AI agents and data pipelines work together — in real-time.",
  "I believe that great insights come from asking the right questions — and letting data lead the answers.",
  "I love crafting end-to-end solutions: from raw data to clean dashboards to predictive models that actually make an impact.",
  "AI agents excite me — especially when they enhance how we interact with information and make decisions.",
  "I aim to contribute to open-source AI/ML tools that empower the next generation of data-driven creators.",
  "My long-term goal? To become a full-stack data scientist who builds scalable, intelligent systems that matter.",
];


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Number of projects
  const projectCount = projects.length;

  const [category, setCategory] = useState<keyof typeof skillData>('Data Science');
  const [chartType, setChartType] = useState('Bar');

  const data = (skillData[category] ?? []).map(skill => ({
    name: skill.name,
    value: levelToValue[skill.level as keyof typeof levelToValue],
  }));

  useEffect(() => {
    document.documentElement.classList.add("dark"); // Force dark theme initially
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [loopNum, setLoopNum] = useState(0);

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typewriterTexts.length;
      const fullText = typewriterTexts[i];

      if (!isDeleting) {
        setCurrentText((prev) => {
          const updated = fullText.substring(0, prev.length + 1);
          return updated;
        });

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setCurrentText((prev) => {
          const updated = fullText.substring(0, prev.length - 1);
          return updated;
        });

        if (currentText === '') {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Rotate carousel left
  const rotateLeft = () => {
    setRotation((prev) => prev + 360 / projectCount);
    setActiveProject((prev) => (prev - 1 + projectCount) % projectCount);
  };

  // Rotate carousel right
  const rotateRight = () => {
    setRotation((prev) => prev - 360 / projectCount);
    setActiveProject((prev) => (prev + 1) % projectCount);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <img
          src="/loader.gif"
          alt="Loading..."
          className="w-24 h-24 animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold truncate max-w-[10rem]">
            Ganasekhar Kalla
          </h1>
          <div className="flex gap-4">
            {[
              "home",
              "interests",
              "skills",
              "projects",
              "experience",
              "certificates",
              "oss",
              "testimonials",
              "contact",
            ].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-1 bg-blue-600 text-white rounded-full"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-800 to-black text-white"
        >
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="min-h-[80px] text-2xl md:text-4xl font-bold">
            <span className="text-blue-300">
              {currentText}
              <span className="animate-pulse ml-1">|</span>
            </span>
          </div>
        </section>

        {/* Interests and Goals */}
        <section className="px-6 py-14 bg-gradient-to-b from-black to-gray-900 text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Interests & Future Goals
          </motion.h2>

          <motion.ul
            className="list-disc pl-6 space-y-4 text-lg leading-relaxed max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {interests.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Skills */}
        <section className="p-10 max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Skills Overview</h3>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <select
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value as keyof typeof skillData)}
            >
              {Object.keys(skillData).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:text-white"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="Bar">Bar Chart</option>
              <option value="Pie">Pie Chart</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            {chartType === 'Bar' ? (
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 50, left: 100, bottom: 5 }} 
              >
                <XAxis type="number" domain={[0, 4]} hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fill: '#9B59B6', fontSize: 14 }} 
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  fill="#4f46e5"
                  radius={[0, 10, 10, 0]}
                  label={({ x, y, width, value }) => (
                    <text x={x + width + 5} y={y + 10} fill="#9B59B6" fontSize={12}>
                      {valueToLevel[value as keyof typeof valueToLevel]}
                    </text>
                  )}
                />
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  fill="#8884d8"
                  label={({ name }) => name}
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            )}
          </ResponsiveContainer>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="p-10 max-w-6xl mx-auto text-center relative overflow-hidden"
          aria-label="Projects Section"
        >
          <h3 className="text-3xl font-semibold mb-6">Projects</h3>

          <div className="relative w-full h-[400px] mx-auto">
            <div
              className="w-full h-full relative transition-transform duration-1000"
              style={{
                transform: `translateZ(-400px) rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {projects.map((proj, index) => {
                const angle = (360 / projectCount) * index;
                const isActive = index === activeProject;
                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 w-64 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                      isActive ? 'scale-110 z-10' : 'scale-100 z-0'
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(400px) translateX(-50%) translateY(-50%)`,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    onClick={() => window.open(proj.link, "_blank")}
                    onKeyDown={(e) => e.key === 'Enter' && window.open(proj.link, "_blank")}
                    role="button"
                    tabIndex={0}
                    aria-label={`Project: ${proj.title}`}
                  >
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {proj.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{proj.desc}</p>
                    <a 
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <Github className="inline-block mr-1" size={16} />
                      View on GitHub
                    </a>
                  </div>
                );
              })}
            </div>

            <button
              onClick={rotateLeft}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow z-20"
              aria-label="Previous Project"
            >
              &#8592;
            </button>
            <button
              onClick={rotateRight}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow z-20"
              aria-label="Next Project"
            >
              &#8594;
            </button>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="p-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Experience</h3>
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold">
                {exp.title} <span className="text-gray-500">- {exp.org}</span>
              </h4>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Certificates */}
        <section id="certificates" className="p-10 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video relative mb-3 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <img src={cert.logo} alt="logo" className="h-5 w-5" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-sm text-center mt-1 text-gray-700 dark:text-gray-300">
                  {cert.desc}
                </p>
                <p className="text-center mt-2 text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400">
                  View Certificate
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* OSS Contributions */}
        <section id="oss" className="p-10 max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Open Source Contributions</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {oss.map((contribution, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-2">{contribution.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{contribution.desc}</p>
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Github className="mr-2" size={20} />
                  View Contribution
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="p-10 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-semibold mb-6">Testimonials</h3>
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              className="mb-6 p-6 bg-gray-200 dark:bg-gray-800 rounded shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-2">"{t.quote}"</p>
              <footer className="text-right font-semibold">
                — {t.name}, <span className="text-gray-600 dark:text-gray-400">{t.title}</span>
              </footer>
            </motion.blockquote>
          ))}
        </section>

        {/* Contact section */}
        <section id="contact" className="p-10 max-w-4xl mx-auto text-center mb-20">
          <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:ganasekharkalla@gmail.com"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ganasekharkalla@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/ganasekhar-gif"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ganasekhark"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;