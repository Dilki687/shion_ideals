import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import contactimg from "../images/contactimg.jpg";

const ContactUs = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className="contact-us">
       {/* Banner Section */}
       <motion.div
        className="banner-section text-white text-center py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${contactimg})`, // Use the correct imported image variable
          backgroundSize: "cover",
          backgroundPosition: "center", // Ensure the image is centered
          height: "80vh", // Set height to 100% of viewport height
          margin: 0, // Remove any margin that might be applied
          padding: 0, // Remove padding
        }}
      >
        {/* Text inside the banner - Aligning it to the left */}
        <h1
  style={{
    textAlign: "left",
    paddingLeft: "200px",
    marginTop: "250px",
    fontFamily: "'Arial', sans-serif",  // Example font family
   
    fontSize: "60px",                  // Example font size
                  
  }}
>
          {t("StayConnected")}
        </h1> {/* Dynamic translation */} 
      </motion.div>

      {/* Content Section */}
      <div className="container my-5">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ color: '#f8c146' }} // Adding the font color
        >
          {t("Havesomeissues")}
        </motion.h2>
        <motion.p
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
  
>
  {t("welcomecontact")}
</motion.p>


        {/* Contact Details Section */}
        <div className="cards-container">
          <div className="row text-center">
            {/* General Enquiries Card */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{t("generalEnquiries")}</h5>{" "}
                  {/* Dynamic translation */}
                  <p className="card-text">
                    📞 +8180-4781-7117 <br />
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Another General Enquiries Card */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.9 }}
            >
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{t("generalEnquiries")}</h5>{" "}
                  {/* Dynamic translation */}
                  <p className="card-text">
                    📧 shionideals@gmail.com
                    <br />
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Consumer Enquiries Card */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.7 }}
            >
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{t("generalEnquiries")}</h5>{" "}
                  {/* Dynamic translation */}
                  <p className="card-text">
                    📞 +8170-1052-6962 <br />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
