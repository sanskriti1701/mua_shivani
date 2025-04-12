'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [visibleImages, setVisibleImages] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference and set default theme
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body tag
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Array of all image numbers
  const allImages = [11, 5, 6, 1, 10, 4]; // Replace with actual image numbers

  // Function to load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 3); // Show 3 more images each time
  };
  return (
    <main>
      {/* Hero */}
      {/* Toggle Button for Dark/Light Mode */}
      <div className="absolute top-4 right-4">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
      </div>
      <div className="relative w-full h-[80vh]">
  {/* Background Image */}
  <div className="relative w-full h-[80vh]">
  {/* Background Image */}
  <Image
    layout="fill"
    src="/gallery12.avif"
    alt="Makeup by Shivani Cover"
    className="w-full h-full object-cover"
    priority // Add this if the image should load faster
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10" />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide drop-shadow-lg">
      Makeup by Shivani
    </h1>
    <p className="mt-4 text-xl md:text-2xl font-light tracking-wider">
      Elegance. Precision. Glamour.
    </p>
  </div>
</div>


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10" />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-20">
    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide drop-shadow-lg">
      Makeup by Shivani
    </h1>
    <p className="mt-4 text-xl md:text-2xl font-light tracking-wider">
      Elegance. Precision. Glamour.
    </p>
  </div>
</div>


      <div className="text-center mt-8">
      <div className="text-center mt-8">
  <div className="space-x-6">

    
 
    {/* Instagram Link */}
    <a
      href="https://www.instagram.com/makeup_shivanigupta"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-lg font-semibold text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-105"
    >
      <span className="flex items-center justify-center space-x-2 text-black">
        <i className="fab fa-instagram text-xl "></i>
        <span>Follow on Instagram</span>
      </span>
    </a>

    {/* Phone Number Link */}
    <a
      href="tel:+1234567890" // replace with the actual phone number
      className="inline-block text-lg font-semibold text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-105"
    >
      <span className="flex items-center justify-center space-x-2">
        <i className="fas fa-phone-alt text-xl"></i>
        <span>Call Us: +91 9340887306</span> {/* Replace with actual phone number */}
      </span>
    </a>
  </div>
</div>

</div>

      {/* Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="max-w-6xl text-1xl mb-12 text-pink-600">S E R V I C E S</h2>
        <h2 className={`max-w-6xl mx-auto text-3xl mb-8 text ${isDarkMode ? 'text-white' : 'text-black'}`}>
  WHAT WE DO
</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {['Bridal Makeup', 'Party Makeup', 'Photoshoots'].map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-pink-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 flex items-center justify-center text-pink-600 text-2xl font-bold">
                {service.split(' ')[0][0]}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service}</h3>
              <p className="text-gray-500 leading-relaxed">
                High-quality, long-lasting makeup tailored for every occasion. Perfect for making you feel confident and radiant.
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Gallery */}
      <section className="py-16 bg-black px-4">
        <h5 className="max-w-6xl mx-auto text-1xl mb-8 text-pink-500">G A L L E R Y</h5>
        <h2 className="max-w-6xl mx-auto text-3xl mb-8 text-white">P O R T F O L I O</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allImages.slice(0, visibleImages).map((n) => (
            <div key={n} className="overflow-hidden shadow-md">
              <Image
                src={`/gallery${n}.jpeg`}
                alt={`Gallery ${n}`}
                width={600}
                height={600}
                layout="fit"
                className="object-cover w-full h-90 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < allImages.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreImages}
              className="bg-pink-600 text-white font-semibold py-3 px-8 hover:bg-pink-700 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text">
          <h5 className="max-w-6xl mx-auto text-1xl mb-8 text text-pink-500">C O N T A C T</h5>
          <h2 className={`max-w-6xl mx-auto text-3xl mb-8 text ${isDarkMode ? 'text-white' : 'text-black'}`}>
  GET   IN   TOUCH
</h2>

          <form className="bg-white shadow-lg p-8 md:p-12 space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white font-semibold py-3 px-8 hover:bg-pink-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


    </main>
  )
}
