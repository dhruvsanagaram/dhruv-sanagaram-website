// app/home.tsx
"use client";

import { useState, useEffect } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { FaGithub, FaDiscord } from 'react-icons/fa';

export default function HomeLanding() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(theme === 'dark');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !isDarkMode;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center space-y-6">
      {/* Dark Mode Toggle */}
      <Toggle.Root
        aria-label="Toggle Dark Mode"
        className="p-2 m-4 bg-blue-500 text-white rounded-full dark:bg-blue-700"
        pressed={isDarkMode}
        onPressedChange={toggleDarkMode}
      >
        <span className="text-lg font-semibold">
          {isDarkMode ? '🌜' : '🌞'}
        </span>
      </Toggle.Root>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-4">
        {/* Logo */}
        <h1 className="text-6xl font-bold">
          <span className="text-blue-500">hey, I'm</span> <span className="text-purple-500">Dhruv Sanagaram</span>
        </h1>

        {/* Typing Animation */}
        <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 typing">
          backend software engineer
        </p>

        {/* Summary Paragraph */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
          I’m passionate about backend systems and distributed technologies. I've interned at Intercontinental Exchange and Roche Information Systems, working with modern cloud and data stack solutions.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a href="/resume" className="px-6 py-3 bg-blue-500 text-white rounded-lg dark:bg-blue-700">
            Resume
          </a>
          <a href="https://www.linkedin.com/in/dhruv-sanagaram" className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg dark:bg-gray-600 dark:text-white">
            LinkedIn
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/your-profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://discordapp.com/users/your-id" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaDiscord className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* CSS for Typing Animation */}
      <style jsx>{`
        .typing {
          overflow: hidden;
          border-right: 0.15em solid;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }
      `}</style>
    </div>
  );
}
