import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
// import bannerBg from "../images/banner-bg.jpg";
import teamwork from "../images/teamwork.png";
import sustainability from "../images/sustainability.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import logo from "../images/logo2.jpg";
import banner5 from "../images/banner5.jpg";
import banner6 from "../images/banner6.jpg";
import banner9 from "../images/banner9.jpg";
import education from "../images/education.jpg";
import qa from "../images/qa.jpg";
import wideRange from "../images/wideRange.webp";
import cusService from "../images/cusService.jpg";

const HomePage = () => {
  const { t } = useTranslation(); // Initialize the translation function

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about");
    const headerOffset = 70; // Replace with your header height
    const elementPosition = aboutUsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header id="home" className="header-section text-center">
        <div
          id="headerCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner">
            {/* Image 1 */}
            <div className="carousel-item active">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner6})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">{t("ShionIdeals")}</h1>
                  <p className="lead">{t("firstintro")}</p>
                  <button
                    className="btn custom-btn btn-lg"
                    onClick={scrollToAboutUs}
                  >
                    {t("ViewMore")}{" "}
                  </button>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="carousel-item">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner5})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">
                    {t("InnovativeSolutions")}
                  </h1>
                  <p className="lead">{t("Deliveringthe")}</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="carousel-item">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner9})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">{t("Trustedby")}</h1>
                  <p className="lead">{t("Sustainable")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">{t("AboutUs")}</h2>
          <p className="text-center">{t("WelcometoShionIdeals")}</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">{t("OurVision")}</h2>
          <p className="text-center mb-5" style={{ marginTop: "-10px" }}>
            {t("Tobeatrustedleader")}
          </p>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>{t("NewBeginnings")}</h5>
                <p>{t("Redefininginnovation")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>{t("TeamSpirit")}</h5>
                <p>{t("Fostering")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>{t("CalmApproach")}</h5>
                <p>{t("Maintaining")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">{t("OurMission")}</h2>
          <p className="text-center mb-5">{t("Toprovideexceptional")}</p>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={teamwork}
                alt="Teamwork"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("Teamwork")}</h5>
              <p>{t("Fosteringinclusiveteamwork")}</p>
            </div>
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Sustainability"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("Sustainability")}</h5>
              <p>{t("Promotingeco")}</p>
            </div>
            <div className="col-md-4">
              <img
                src={education}
                alt="Education"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("Education")}</h5>
              <p>{t("Educating")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">{t("OurServices")}</h2>
          <p className="text-center mb-5">{t("Explorethediverse")}</p>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={qa}
                alt="Quality Assurance"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("QualityAssurance")}</h5>
              <p>{t("Weensureevery")}</p>
            </div>
            <div className="col-md-4">
              <img
                src={wideRange}
                alt="Wide Range of Products"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("WideRangeofProducts")}</h5>
              <p>{t("Choosefrom")}</p>
            </div>
            <div className="col-md-4">
              <img
                src={cusService}
                alt="Customer Support"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>{t("CustomerSupport")}</h5>
              <p>{t("Ourteamis")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="our-brands-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">{t("OurBrands")}</h2>
          <div className="row justify-content-center text-center">
            <div className="col-md-3 col-sm-6">
              <a
                href="https://www.shiongreen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo} // Replace with your brand logo path
                  alt="Shion Green"
                  className="img-fluid mb-3 rounded-circle brand-logo"
                />
              </a>
              {/* <h5>Shion Green</h5> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
