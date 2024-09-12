import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">

        <section>
            <br />
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FaGem className="me-3" /> SupaSafe
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-reset">Angular</a></p>
                <p><a href="#!" className="text-reset">React</a></p>
                <p><a href="#!" className="text-reset">Vue</a></p>
                <p><a href="#!" className="text-reset">Laravel</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="#!" className="text-reset">Pricing</a></p>
                <p><a href="#!" className="text-reset">Settings</a></p>
                <p><a href="#!" className="text-reset">Orders</a></p>
                <p><a href="#!" className="text-reset">Help</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><FaHome className="me-3" /> Odisha, India</p>
                <p><FaEnvelope className="me-3" /> vinayaka.vvk@gmail.com</p>
                <p><FaPhone className="me-3" /> +91 7400 157 088</p>
              </div>
            </div>
          </div>
        </section>
            <section className="d-flex justify-content-center align-items-center p-4 border-bottom">

            {/* <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div> */}

            <div>
                <a href="#" className="me-4 text-reset">
                <FaFacebook />
                </a>
                <a href="#" className="me-4 text-reset">
                <FaTwitter />
                </a>
                <a href="#" className="me-4 text-reset">
                <FaInstagram />
                </a>
                <a href="#" className="me-4 text-reset">
                <FaLinkedin />
                </a>
                <a href="#" className="me-4 text-reset">
                <FaGithub/>

                {/* <button style={{ position: 'absolute', bottom: '0', right: '0', margin: '1rem', background: 'transparent', border: 'none', padding: '0', fontSize: '1.5rem', }}><i className="bi bi-sun"></i></button> */}
                </a>
            </div>
            
            </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
