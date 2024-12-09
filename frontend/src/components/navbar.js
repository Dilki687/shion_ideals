import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpeg";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState("home");

  // Function to change language
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  // Retrieve language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Adjust this to match your navbar height
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Handle click for scrolling or navigating to the home page
  const handleScrollOrNavigate = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollToSection: sectionId },
      });
    } else {
      scrollToSection(sectionId);
    }
  };

  // Handle scroll event to update the active link
  const handleScrollEvent = () => {
    const sections = ["home", "about", "services", "contact"];
    let currentSection = "home";
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section && window.scrollY >= section.offsetTop - 70) {
        currentSection = sectionId;
      }
    });
    setActiveLink(currentSection);
  };

  // Perform scrolling after navigation
  useEffect(() => {
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
    }
  }, [location]);

  // Update active link based on current route
  useEffect(() => {
    if (location.pathname === "/contactus") {
      setActiveLink("contact");
    } else if (location.pathname === "/") {
      handleScrollEvent(); // Update active link based on scroll position
    } else {
      setActiveLink("home"); // Default to home for other routes
    }
  }, [location]);

  // Add scroll event listener to update the active link on scroll
  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScrollEvent);
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    }
  }, [location]);

  // Navbar styles
  const navbarStyle = {
    backgroundColor: "#343a40",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    fontFamily: "Arial, sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const brandStyle = {
    color: "#f8c146",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ffffff",
    fontWeight: "500",
    transition: "color 0.3s",
    marginRight: "15px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#f8c146",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
            style={{ borderRadius: "50%" }}
          />
          <strong style={brandStyle}>{t("Shion Ideals")}</strong>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "#ffffff" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                style={activeLink === "home" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScrollOrNavigate(e, "home")}
              >
                {t("Home")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={activeLink === "about" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScrollOrNavigate(e, "about")}
              >
                {t("About Us")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                style={activeLink === "services" ? activeLinkStyle : linkStyle}
                onClick={(e) => handleScrollOrNavigate(e, "services")}
              >
                {t("Services")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contactus"
                style={activeLink === "contact" ? activeLinkStyle : linkStyle}
              >
                {t("Contact Us")}
              </a>
            </li>
          </ul>

          {/* Language Dropdown */}
          <div className="dropdown ms-3">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("Language")}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="languageDropdown"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleLanguageChange("jp")}
                >
                  日本語 (Japanese)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
