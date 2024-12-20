import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle smooth scrolling and set active section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); 
      setIsDrawerOpen(false); 
    }
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "why-us",
        "services",
        "about",
        "casestudies",
        "faq",
        "blog",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-primary shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="max-w-[1440px] mx-auto py-6 px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="md:w-[145px] w-auto"
                src="/images/Logo-pali.png"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "why-us", label: "Why Us" },
                { id: "services", label: "Services" },
                { id: "about", label: "About Us" },
                { id: "casestudies", label: "Casestudies" },
                { id: "faq", label: "FAQ" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium ${
                    activeSection === item.id
                      ? "text-[#4F95DF]"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                type="button"
                className="text-white focus:outline-none"
              >
                {isDrawerOpen ? "" : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Drawer Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-[80%] bg-primary transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col h-full text-white">
            <div className="pt-4 pl-4 flex items-center justify-between">
              <img
                className="w-[150px]"
                src="/images/Logo-pali.png"
                alt="Logo"
              />
              <button onClick={toggleDrawer} className="mr-4">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow pl-7 space-y-4 mt-7 ">
              {[
                { id: "home", label: "Home" },
                { id: "why-us", label: "Why Us" },
                { id: "services", label: "Services" },
                { id: "about", label: "About Us" },
                { id: "casestudies", label: "Casestudies" },
                { id: "faq", label: "FAQ" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block font-medium ${
                    activeSection === item.id
                      ? "text-[#4F95DF]"
                      : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isDrawerOpen && (
          <div
            onClick={toggleDrawer}
            className="fixed inset-0 bg-default bg-opacity-50 z-40"
          ></div>
        )}
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
