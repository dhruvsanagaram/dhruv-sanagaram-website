"use client";

import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import { FaGithub, FaAws, FaDocker, FaJava, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiGoland, SiTypescript, SiPostgresql, SiApachekafka, SiRedis } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
import * as Dialog from '@radix-ui/react-dialog'; 
import projects from './projects/projects';
import { useEffect, useState } from 'react';

export default function HomeLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set dark mode as default

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
    setIsDarkMode(theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !isDarkMode;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <div className="ml-auto flex items-center space-x-6">
            <button
              aria-label="Toggle Dark Mode"
              className="p-2 bg-blue-500 text-white rounded-full dark:bg-blue-700"
              onClick={toggleDarkMode}
            >
              <span className="text-lg font-semibold font-paragraph">
                {isDarkMode ? '🌜' : '🌞'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 py-16">
        <div className="rounded-full overflow-hidden w-60 h-60 mb-6">
          <Image
            src="/headshot.jpeg"
            alt="Headshot of Dhruv Sanagaram"
            width={240}
            height={240}
            className="rounded-full"
          />
        </div>
        <h1 className="text-6xl font-title mb-4">
          <span className="text-blue-500">hey, I&apos;m</span> <span className="text-purple-500">Dhruv Sanagaram</span>
        </h1>
        <p className="text-2xl font-header text-gray-700 dark:text-gray-300 typing mb-4">
          backend software engineer
        </p>
        <p className="text-lg font-paragraph text-gray-600 dark:text-gray-400 max-w-xl mb-8">
          I’m passionate about backend systems and distributed technologies. I&apos;ve interned at Intercontinental Exchange and Roche Information Systems, working with modern cloud and data stack solutions.
        </p>
        <div className="flex space-x-6 mb-8">
          <button
            onClick={() => {
              document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg dark:bg-blue-700 hover:bg-blue-600 font-paragraph"
          >
            Resume
          </button>
          <a href="https://www.linkedin.com/in/dhruvsanagaram" className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg dark:bg-gray-600 dark:text-white font-paragraph">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex flex-col items-center pt-10 pb-20 bg-gray-200 dark:bg-gray-800 font-title">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white font-header">Work Experience</h2>
        <Tabs.Root defaultValue="ice" className="flex flex-col lg:flex-row lg:space-x-10 max-w-5xl w-full">
          
          {/* Tabs List */}
          <Tabs.List className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mb-4 lg:mb-0 text-gray-900 dark:text-gray-300">
            <Tabs.Trigger
              value="ice"
              className="px-4 py-2 h-auto bg-blue-100 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-200 transition duration-300 transform hover:scale-105 font-header"
            >
              Intercontinental Exchange
            </Tabs.Trigger>
            <Tabs.Trigger
              value="roche"
              className="px-4 py-2 h-auto bg-blue-100 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-200 transition duration-300 transform hover:scale-105 font-header"
            >
              Roche Information Systems
            </Tabs.Trigger>
            <Tabs.Trigger
              value="catlab"
              className="px-4 py-2 h-auto bg-blue-100 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-200 transition duration-300 transform hover:scale-105 font-header"
            >
              Artificial Intelligence Researcher
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tabs Content */}
          <Tabs.Content value="ice" className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 font-paragraph">
            <div className="flex-1 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold text-purple-500 font-header">Software Development Intern</h3>
                <p className="text-gray-500 font-header">May 2023 - Aug 2023</p>
              </div>
              <p className="text-bright-cyan-500 font-header mt-2">Intercontinental Exchange</p>
              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <div>Developed REST APIs for Escrow Analysis & Property Insurance microservices using Java SpringBoot, React.js</div>
                <div>Wrote end-to-end penetration testing scripts with Cypress.js and secure development training assignments with Python</div>
                <div>Deployed microservices to ~41,000 end-users and used ArgoCD to continuously deliver feature updates</div>
              </div>
            </div>
            <Image src="/icemarkets_logo.jpeg" alt="Intercontinental Exchange Logo" width={160} height={160} className="rounded-lg" />
          </Tabs.Content>

          <Tabs.Content value="roche" className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 font-paragraph">
            <div className="flex-1 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold text-purple-500 font-header">Software Development Intern</h3>
                <p className="text-gray-500 font-header">May 2024 - Aug 2024</p>
              </div>
              <p className="text-bright-cyan-500 font-header mt-2">Roche Information Systems</p>
              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <div>Developed features for health care providers using React.js, SpringBoot, Spring Cloud/GraphQL, and HAPI FHIR datastore.</div>
                <div>Automated integration tests for workflow engines using Docker, Kafka, and Kubernetes.</div>
                <div>Provisioned SonarQube quality gate checks with Python and Terraform scripts.</div>
              </div>
            </div>
            <Image src="/roche.png" alt="Roche Logo" width={160} height={160} className="rounded-lg" />
          </Tabs.Content>

          <Tabs.Content value="catlab" className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 font-paragraph">
            <div className="flex-1 text-lg text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold text-purple-500 font-header">Artificial Intelligence Researcher</h3>
                <p className="text-gray-500 font-header">Jan 2024 - June 2024</p>
              </div>
              <p className="text-bright-cyan-500 font-header mt-2">UIUC Intelligent CAT Lab</p>
              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <div>Used KLEE symbolic execution engine to perform automated test generation for data preprocessing.</div>
                <div>Used Python for data preprocessing in pseudocode to code LLM translations.</div>
              </div>
            </div>
            <Image src="/catlab.png" alt="UIUC CAT Lab Logo" width={160} height={160} className="rounded-lg" />
          </Tabs.Content>
        </Tabs.Root>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center py-12 mb-16 font-title">
        <h2 className="text-4xl font-bold mb-20 text-gray-800 dark:text-white font-header">Projects</h2>
        <div className="flex justify-center space-x-20">
          {projects.map((project, index) => (
            <Dialog.Root key={index}>
              <Dialog.Trigger className="flex justify-center items-center w-60 h-60 rounded-full bg-white shadow-lg dark:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden">
                <Image 
                  src={project.logo} 
                  alt={`${project.title} Logo`} 
                  width={240}
                  height={240}
                  className={`object-contain ${
                    project.title === 'Linux Project' || project.title === 'Socialblade Project' ? 'p-7' : ''
                  } rounded-full`}
                />
              </Dialog.Trigger>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60 z-40" />
              <Dialog.Content className="fixed top-1/2 left-1/2 max-w-4xl w-full p-8 bg-white dark:bg-gray-800 rounded-lg transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col lg:flex-row justify-between items-center lg:space-x-8 max-h-[90vh]">
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-gray-500 dark:text-gray-300">
                    <MdClose className="w-6 h-6" />
                  </button>
                </Dialog.Close>
                <div className="flex-1 text-center lg:text-left text-gray-700 dark:text-gray-300 font-paragraph">
                  <h3 className="text-2xl font-semibold text-blue-500 dark:text-purple-500 mb-4 font-header">{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {/* Adjust image size based on project title */}
                <div className="flex justify-center items-center mt-4 lg:mt-0">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Image`} 
                    width={project.title === 'CNN Optimizer' ? 500 : project.title === 'Frogger' ? 128 : 320}
                    height={project.title === 'CNN Optimizer' ? 500 : project.title === 'Frogger' ? 128 : 320}
                    className="object-contain rounded-lg"
                  />
                </div>
              </Dialog.Content>
            </Dialog.Root>
          ))}
        </div>
      </section>


      {/* Stack Section */}
      <section id="stack" className="py-12 mb-4 bg-gray-200 dark:bg-gray-800 font-header">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Stack</h2>
        <div className="max-w-5xl mx-auto text-center space-y-12 mb-10">
          {/* Languages */}
          <div className="flex justify-center space-x-20 text-6xl text-gray-700 dark:text-gray-300">
            <FaJava />
            <FaPython />
            <SiTypescript />
            <SiGoland />
            <FaJsSquare />
          </div>
          {/* Tools */}
          <div className="flex justify-center space-x-24 text-6xl text-gray-700 dark:text-gray-300">
            <FaAws />
            <FaDocker />
            <SiApachekafka />
            <SiPostgresql />
            <SiRedis />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 font-header">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Resume</h2>
        <div className="flex flex-col items-center">
          {/* PDF Viewer */}
          <div className="w-full max-w-4xl h-[800px] mb-4"> {/* Increased the height to 800px */}
            <iframe
              src="/resume.pdf" // Replace with the actual path to your PDF file
              className="w-full h-full border-2 border-gray-300 rounded-lg"
              title="Dhruv Sanagaram Resume"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-gray-300 py-8 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Copyright and Links */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">&copy; 2024 Dhruv Sanagaram. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/dhruvsanagaram" className="text-gray-400 hover:text-white">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://calendar.google.com/calendar/u/0?cid=ZGhydXZzYW5hZ2FyYW1AZ21haWwuY29t" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11zm0-13H5V5h14v3zm-3 5H8v2h8v-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for Typing Animation and Smooth Scrolling */}
      <style jsx>{`
        .typing {
          overflow: hidden;
          border-right: 0.15em solid;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          max-width: 100%; /* Ensures that it doesn't overflow */
          display: inline-block; /* This limits the width to the actual content */
          animation: typing 3.5s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; /* This ensures it types the content and stops at the end of the text */ }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
