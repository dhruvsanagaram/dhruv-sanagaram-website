// app/home.tsx
"use client";

export default function HomeLanding() {
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Apply the saved theme preference on component mount
  if (typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        className="p-2 m-4 bg-blue-500 text-white rounded dark:bg-blue-700"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>

      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to My Website</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This is a short introduction to my website.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded">
              Get Started
            </a>
            <a
              href="#"
              className="ml-4 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
