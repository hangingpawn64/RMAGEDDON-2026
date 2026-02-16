import { useEffect } from "react";
import "./Accommodation.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accommodation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div>
      <div className="accom-bg">
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center" data-aos="fade-down" data-aos-delay="0">
          <Navbar />
        </div>
        <div className="accom-overlay"></div>
        <div className="accom-container">
          <div className="accom-accommodation" data-aos="fade-down">ACCOMMODATION</div>

          <div className="accom-content" data-aos="fade-up">
            <div className="accom-info-card">
              <h2 className="accom-subtitle">Stay Details</h2>
              <p className="accom-text">
                Accommodation is <span className="highlight">FREE</span> for all participants.
              </p>
              <p className="accom-text">
                Accommodation for both male and female participants is arranged at
                <span className="location-name"> Gurudwara Dera Shahid Baba Deep Singh Ji</span> (Separately).
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfM1TnKvHbls3knNI9GiRozA-Y1sAZCZRlWwah6UHegbW0P3w/viewform?usp=sharing&ouid=106605480803419039664"
                target="_blank"
                rel="noopener noreferrer"
                className="accom-btn"
              >
                Team Arrival Form
              </a>
            </div>

            <div className="accom-map-container">
              <iframe
                title="Gurudwara Map"
                src="https://maps.google.com/maps?q=Dera%20Shahid%20Baba%20Deep%20Singh%20Ji&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="accom-left" data-aos="fade-right"> </div>
        <div className="accom-right" data-aos="fade-left"> </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
