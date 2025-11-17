"use client";

import React, { useState, useEffect } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useRef } from 'react';
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin } from "lucide-react";
import { TooltipProps } from 'recharts';
import { Analytics } from "@vercel/analytics/next"
import { SiKaggle } from "react-icons/si";


const projects = [
  {
    title: "Real-Time Credit Card Fraud Detection System",
    desc:
      "Developed an end-to-end fraud detection pipeline using Kafka, Spark Streaming, and MongoDB to process live transactions. Integrated Prometheus and Grafana for monitoring, enabling real-time anomaly detection and system reliability.",
    link: "https://github.com/Ganasekhar-gif/real-time-credit-card-fraud-detection-system.git",
  },
  {
    title: "AI-Powered Multi-Disease Detection System",
    desc:
      "Built a deep learning model with VGG16 to identify multiple diseases from chest X-rays and clinical images. Enhanced model accuracy through image preprocessing and data augmentation for robust medical diagnosis.",
    link: "https://github.com/Ganasekhar-gif/multi-disease-detection.git",
  },
  {
    title: "AI-Driven Multi-Agent Data Analytics Platform",
    desc:
      "Designed a multi-agent architecture where AI agents collaborate to automate data collection, preprocessing, and visualization. Each agent specializes in distinct analytics tasks, optimizing data pipelines and decision-making efficiency.",
    link: "https://github.com/Ganasekhar-gif/AI_Powered_Real-Time_Data_Analyst_agent.git",
  },
  {
    title: "Intelligent Code Review & Contributor Assistant",
    desc:
      "Created an AI assistant that performs automated code reviews, detects performance or security issues, and provides contribution guidance. Integrated NLP and static code analysis to enhance collaboration in open-source workflows.",
    link: "https://github.com/Ganasekhar-gif/ai-code-review-agent.git",
  },
  {
    title: "AI-Based Risk Management & Privacy Chat App",
    desc:
      "Developed a secure chat application powered by NLP that identifies privacy risks in real time and provides user safety recommendations. Combines AI-driven content analysis with end-to-end encryption for safe digital communication.",
    link: "https://github.com/Ganasekhar-gif/ai-code-review-agent.git",
  },
];


const experience = [
  {
    title: "AI & Machine Learning Intern",
    org: "IBM SkillsBuild",
    desc:
      "Developed a hybrid movie recommendation system similar to Netflix using scikit-learn models, FAISS, and MySQL. Deployed the model with FastAPI for real-time recommendations, improving personalization and scalability.",
  },
  {
    title: "AI Transformative Learning Intern",
    org: "Microsoft & Edunet Foundation",
    desc:
      "Built an ATS Resume Score Predictor using NLP and TF-IDF to match resumes with job descriptions. Designed a Streamlit frontend to let users check and improve their resume scores instantly.",
  },
  {
    title: "Data Analytics Intern (LLMs Integration)",
    org: "Edunet Foundation",
    desc:
      "Worked on a sales analytics project combining data analysis and visualization. Created interactive Power BI dashboards that highlighted sales performance, trends, and key business insights.",
  },
];


const oss = [
  {
    title: "Scikit-learn Contributor",
    desc:
      "Improved import structure and documentation to make the library easier to navigate and maintain. Helped enhance overall code readability and user understanding of core modules.",
    link: "https://github.com/scikit-learn/scikit-learn/pull/32346#event-20063249559", 
  },
  {
    title: "Braindecode Contributor",
    desc:
      "Added a dropdown filter and search feature to help users quickly find deep learning models. Improved interface usability and made documentation more accessible for new contributors.",
    link: "https://github.com/braindecode/braindecode/pull/718",
  },
  {
    title: "MNE-Python Contributor",
    desc:
      "Enhanced tutorials and educational resources to simplify onboarding for new users. Proposed improvements for creating MNE data structures and visualizing EEG data using NumPy arrays.",
    link: "https://github.com/Ganasekhar-gif/mne-python/pull/1",
  },
];



const skillData = {
  "Data Science": [
    { name: "Python", level: "Expert" },
    { name: "Pandas", level: "Expert" },
    { name: "NumPy", level: "Expert" },
    { name: "Scikit-learn", level: "Advanced" },
    { name: "SQL", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Matplotlib", level: "Intermediate" },
    { name: "Seaborn", level: "Intermediate" }
  ],

  "AI & Machine Learning": [
    { name: "Machine Learning", level: "Advanced" },
    { name: "Deep Learning", level: "Advanced" },
    { name: "Natural Language Processing (NLP)", level: "Advanced" },
    { name: "Large Language Models (LLMs)", level: "Intermediate" },
    { name: "PyTorch", level: "Beginner" },
    { name: "TensorFlow", level: "Intermediate" },
    { name: "Hugging Face Transformers", level: "Intermediate" }
  ],

  "Tools & Technologies": [
    { name: "Apache Kafka", level: "Beginner" },
    { name: "Apache Spark", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "MLOps", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
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

const achievements = [
  {
    title: "Kaggle Store Sales Forecasting Challenge",
    desc: "Placed in the top 20% among global participants for building robust feature engineering and predictive modeling workflows.",
    link: "https://www.kaggle.com/competitions/store-sales-time-series-forecasting",
  },
  {
    title: "Naukri CodeQuetz Coding Challenge",
    desc: "Ranked 266 out of 29,000+ participants for problem-solving and algorithmic efficiency.",
    link: "https://www.naukri.com/code360/",
  },
];

const resume = {
  url: "/my_res--.pdf",
  desc: "Download my latest resume for a comprehensive overview of my experience, skills, and achievements."
};

const certificates = [
  {
    title: "AI & Machine Learning Intern",
    desc: "Completed an internship at IBM where I built a hybrid movie recommendation system using Scikit-learn, FAISS, FastAPI, and MySQL. Gained hands-on experience in deploying AI models for real-world applications.",
    link: "https://drive.google.com/file/d/your-ibm-internship-certificate-link/view",
    image: "/ibm-aiml-cert.png",
    logo: "/ibm-logo.png",
  },
  {
    title: "Microsoft AI Transformative Learning Program",
    desc: "Developed an ATS Resume Score Predictor using NLP and TF-IDF during the internship. Learned to apply AI concepts in practical scenarios under Microsoft & Edunet Foundation.",
    link: "https://drive.google.com/file/d/1XeQxB4jreSQ0PVueFQDUFSYUQtNpQj1W/view",
    image: "/microsoft-cert.png",
    logo: "/microsoft-logo.png",
  },
  {
    title: "Data Analytics Internship Using AI & LLMs",
    desc: "Worked on a Sales Analytics project using Power BI, performing data cleaning, analysis, and dashboard creation to uncover key business insights.",
    link: "https://drive.google.com/file/d/1jzdOffrz2LGrQg5EOudEfvLcl4FDzA9b/view",
    image: "/analytics-cert.png",
    logo: "/vi-logo.png",
  },
  {
    title: "IBM Big Data Foundations",
    desc: "Earned foundational certification from IBM covering Hadoop, Spark, and large-scale data processing. Learned to handle, store, and analyze massive datasets efficiently.",
    link: "https://drive.google.com/file/d/your-ibm-big-data-certificate-link/view",
    image: "/ibm-bigdata-cert.png",
    logo: "/ibm-logo.png",
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

// interface Testimonial {
//   name: string;
//   title: string;
//   quote: string;
// }

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


interface Bubble {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  skill: { name: string; level: string };
}

interface FloatingSkillBubbleProps {
  bubble: Bubble;
  containerRef: React.RefObject<HTMLDivElement>;
}

const FloatingSkillBubble: React.FC<FloatingSkillBubbleProps> = ({
  bubble,
  containerRef
}) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full font-semibold 
                 text-white text-xs shadow-md cursor-pointer select-none px-2"
      animate={{
        x: bubble.x,
        y: bubble.y
      }}
      transition={{ duration: 0.05, ease: "linear" }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 30px 10px #6366f1"
      }}
      style={{
        width: bubble.size,
        height: bubble.size,
        background: "linear-gradient(135deg, #6366f1 60%, #a5b4fc 100%)",
        border: "3px solid #fff"
      }}
    >
      <span className="text-center leading-tight break-words" style={{ 
        fontSize: bubble.size < 90 ? '0.65rem' : bubble.size < 110 ? '0.7rem' : '0.75rem',
        padding: '4px',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'center'
      }}>
        {bubble.skill.name}
      </span>
    </motion.div>
  );
};

const FloatingSkillsContainer: React.FC<{
  skills: Array<{ name: string; level: string }>;
  containerRef: React.RefObject<HTMLDivElement>;
}> = ({ skills, containerRef }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Initialize bubbles
    const initialBubbles: Bubble[] = skills.map((skill, index) => {
      const bubbleSize =
        70 +
        10 *
          (skill.level === "Expert"
            ? 2
            : skill.level === "Advanced"
            ? 1.5
            : skill.level === "Intermediate"
            ? 1
            : 0.7);

      return {
        id: index,
        x: Math.random() * (containerWidth - bubbleSize),
        y: Math.random() * (containerHeight - bubbleSize),
        vx: (Math.random() - 0.5) * 2 + (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() - 0.5) * 2 + (Math.random() > 0.5 ? 1 : -1),
        size: bubbleSize,
        skill
      };
    });

    setBubbles(initialBubbles);

    let animationFrame: number;

    const animate = () => {
      setBubbles(prevBubbles => {
        const newBubbles = prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.vx;
          let newY = bubble.y + bubble.vy;
          let newVx = bubble.vx;
          let newVy = bubble.vy;

          // Wall collision with proper bouncing
          if (newX <= 0) {
            newVx = Math.abs(newVx);
            newX = 0;
          } else if (newX >= containerWidth - bubble.size) {
            newVx = -Math.abs(newVx);
            newX = containerWidth - bubble.size;
          }

          if (newY <= 0) {
            newVy = Math.abs(newVy);
            newY = 0;
          } else if (newY >= containerHeight - bubble.size) {
            newVy = -Math.abs(newVy);
            newY = containerHeight - bubble.size;
          }

          return { ...bubble, x: newX, y: newY, vx: newVx, vy: newVy };
        });

        // Collision detection between bubbles
        for (let i = 0; i < newBubbles.length; i++) {
          for (let j = i + 1; j < newBubbles.length; j++) {
            const b1 = newBubbles[i];
            const b2 = newBubbles[j];

            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (b1.size + b2.size) / 2;

            if (distance < minDistance && distance > 0) {
              // Collision detected - swap velocities for opposite direction movement
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Rotate velocities
              const vx1 = b1.vx * cos + b1.vy * sin;
              const vy1 = b1.vy * cos - b1.vx * sin;
              const vx2 = b2.vx * cos + b2.vy * sin;
              const vy2 = b2.vy * cos - b2.vx * sin;

              // Swap velocities
              const finalVx1 = vx2;
              const finalVx2 = vx1;

              // Rotate back
              newBubbles[i].vx = finalVx1 * cos - vy1 * sin;
              newBubbles[i].vy = vy1 * cos + finalVx1 * sin;
              newBubbles[j].vx = finalVx2 * cos - vy2 * sin;
              newBubbles[j].vy = vy2 * cos + finalVx2 * sin;

              // Separate bubbles to prevent overlap
              const overlap = minDistance - distance;
              const separationX = (dx / distance) * overlap * 0.5;
              const separationY = (dy / distance) * overlap * 0.5;

              newBubbles[i].x -= separationX;
              newBubbles[i].y -= separationY;
              newBubbles[j].x += separationX;
              newBubbles[j].y += separationY;
            }
          }
        }

        return newBubbles;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [skills, containerRef]);

  return (
    <>
      {bubbles.map(bubble => (
        <FloatingSkillBubble key={bubble.id} bubble={bubble} containerRef={containerRef} />
      ))}
    </>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
          className="w-80 h-80 animate-pulse"
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
              "achievements",
              "resume",
              "contact"
            ].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
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

        {/* Interests */}
        <section id="interests" className="px-6 py-14 bg-gradient-to-b from-black to-gray-900 text-white">
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
        <section id="skills" className="p-10 max-w-5xl mx-auto">
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
          </div>

          <div
            ref={containerRef}
            className="relative w-full h-[500px] bg-gradient-to-br from-blue-200/40 
                       to-purple-200/40 dark:from-gray-800 dark:to-gray-900 
                       rounded-xl overflow-hidden"
          >
            <FloatingSkillsContainer
              skills={skillData[category]}
              containerRef={containerRef}
            />
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.org}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={cert.logo} alt={cert.title} className="w-12 h-12 object-contain mr-4" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.desc}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section id="oss" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Open Source Contributions</h2>
            <div className="space-y-6">
              {oss.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-500 hover:underline"
                  >
                    View Contribution →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
            <div className="space-y-6">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{ach.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{ach.desc}</p>
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              {resume.desc}
            </p>
            
            {/* Resume Preview Box */}
            <div className="mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: '600px' }}>
                <div className="inline-block min-w-full">
                  <iframe
                    src={`${resume.url}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full bg-white"
                    style={{ 
                      minWidth: '800px',
                      height: '600px',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                    title="Resume Preview"
                  />
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <a
                href={resume.url}
                download="Ganasekhar_Kalla_Resume.pdf"
                onClick={(e) => {
                  // Force download by creating a temporary link
                  const link = document.createElement('a');
                  link.href = resume.url;
                  link.download = 'Ganasekhar_Kalla_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  e.preventDefault();
                }}
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto italic">
              Let's connect and build something amazing together — whether it's discussing AI innovations, collaborating on data science projects, or exploring new opportunities in tech!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.kaggle.com/kallaganasekhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Kaggle"
              >
                <SiKaggle size={28} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p>© {new Date().getFullYear()} Ganasekhar Kalla. All rights reserved.</p>
            <p className="mt-2 text-gray-400 text-sm">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;