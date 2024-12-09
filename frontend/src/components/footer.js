import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function Footer() {
  const { t } = useTranslation();
  const footerStyle = {
    backgroundColor: "#343a40", // Dark gray background
    color: "#ffffff", // White text
    padding: "20px 0",
  };

  const linkStyle = {
    color: "#f8c146", // Orange links
    textDecoration: "none",
    margin: "0 10px",
  };

  const linkHoverStyle = {
    textDecoration: "underline", // Add underline on hover
  };

  return (
    <footer style={footerStyle}>
      <div className="container text-center">
        <p className="mb-2">{t("Allrightsreserved")}</p>
        <p>
        {t("Followus:") + " "}
          <a
            href="https://facebook.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Facebook")}
          </a>
          |
          <a
            href="https://twitter.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Twitter")}
          </a>
          |
          <a
            href="https://instagram.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Instagram")}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
