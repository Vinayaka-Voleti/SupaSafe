import React from "react";
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, 
  FaGem, FaHome, FaEnvelope, FaPhone , FaSun  , FaMoon
} from "react-icons/fa";

const Footer = (props) => {
  const currentDate = new Date();
  return (
    <footer className="text-center text-lg-start bg-light text-dark py-4">
      
      {/* Main Footer Content */}
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-3">
              <FaGem className="me-2" /> KonnexWeb
            </h5>
            <p>
              Your go-to platform for community safety and real-time alerts. Stay connected, stay safe!
            </p>
          </div>

          {/* Products Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Features</h6>
            <p><a href="#!" className="text-reset">Real-time Alerts</a></p>
            <p><a href="#!" className="text-reset">Community Chat</a></p>
            <p><a href="#!" className="text-reset">Emergency Contacts</a></p>
            <p><a href="#!" className="text-reset">Secure Messaging</a></p>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <p><a href="#!" className="text-reset">About Us</a></p>
            <p><a href="#!" className="text-reset">Privacy Policy</a></p>
            <p><a href="#!" className="text-reset">Terms of Service</a></p>
            <p><a href="#!" className="text-reset">Help Center</a></p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p><FaHome className="me-2" /> Odisha, India</p>
            <p><FaEnvelope className="me-2" /> vinayaka.vvk@gmail.com</p>
            <p><FaPhone className="me-2" /> +91 7400 157 088</p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <section className="d-flex justify-content-center gap-3 mt-3">
        <a href="/" target="_blank" rel="noopener noreferrer" className="text-reset fs-4">
          <FaFacebook />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="text-reset fs-4">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/sanjam_das/" target="_blank" rel="noopener noreferrer" className="text-reset fs-4">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sanjamdas/" target="_blank" rel="noopener noreferrer" className="text-reset fs-4">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Vinayaka-Voleti/konnexweb" target="_blank" rel="noopener noreferrer" className="text-reset fs-4">
          <FaGithub />
        </a>

        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}` }>
                        {/* <input className="form-check-input" type="checkbox"  onClick={props.DarkMode}role="switch" style={{position:'absolute', right:100}} id="flexSwitchCheckDefault"/> */}
                        <div style={{
        position: 'absolute',
        right: '20px',
        cursor: 'pointer',
        fontSize: '24px',
      }}
      onClick={props.DarkMode}
    >
      {/* {props.isDarkMode ? <FaMoon /> : <FaSun />} */}
    </div>
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{position:'absolute', right:110}}>DarkMode</label> */}
                    </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-3 mt-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        © {currentDate.getFullYear()} SupaSafe | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
