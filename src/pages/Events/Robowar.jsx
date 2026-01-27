import { useEffect, useState } from "react";
import "./Robowar.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WarCarousel from "../../components/WarCarousel.jsx"
import GameCard from "../../components/Cards/GameCard";
import AnimatedButton from "../../components/AnimatedButton";
import TechPopup from "../../components/TechPopup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Robowar = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      easing: 'ease-in-out'
    });
    AOS.refresh();
  }, []);

  const handlePopupTrigger = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Popup stays for 2 seconds
  };

  return (
    <>
      <TechPopup isVisible={showPopup} />
      {/* NAVBAR */}
      <div className="top-0 left-0 w-full z-50 flex justify-center events-navbar-wrapper" data-aos="fade-down" data-aos-delay="0">
        <Navbar />
      </div>

      {/* ================= ROBOWAR SECTION ================= */}
      <section className="robowar-container">
        <div className="robowar-left">
          <div className="robowar-left-content">

            <div className="robowar-header" data-aos="zoom-in" data-aos-delay="500">
              <p className="robowar-title">ROBOWAR</p>
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768074254/Group_514617166_ohluoe.png"
                alt="Robowar Title"
              />
            </div>

            <div className="robowar-content">
              <div className="robowar-content-top" data-aos="fade-right" data-aos-delay="1000">
                <p>
                  Enter the world of Robo Wars, where power meets precision,
                  strategy, and innovation rules the battlefield
                </p>
              </div>

              <div className="robowar-content-bottom" data-aos="fade-right" data-aos-delay="1500">
                <p>
                  Last year, RMAGEDDON made history as Marathwada's first RoboWars
                  event. This year, the battlefield opens again your chance to test
                  your robot, prove your skills, and make your mark.
                </p>
              </div>
            </div>

            <div className="robowar-buttons" data-aos="zoom-in" data-aos-delay="2000">
              <AnimatedButton text="REGISTER" onClick={handlePopupTrigger} />
              <AnimatedButton text="RULE BOOK" onClick={handlePopupTrigger} />
            </div>

          </div>
        </div>

        <div className="robowar-right">
          <div className="robowar-character">
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766919193/image-removebg-preview_1_1_1_zfojwm.png"
              alt="Character"
            />
          </div>

          <div className="robowar-carousel">
            <WarCarousel />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="robowar-event-section robowar-bg-section-2">
        <div className="robowar-event-container">

          <div className="robowar-event-cards" data-aos="fade-left">
            <GameCard
              title="Vinewood Velocity"
              description="Unleash Speed, Strategy, and Skill! Push Your Robots to the Limit and Cross the Finish Line Victorious!"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768246819/7e76f4fc-b6f8-4ff8-a286-b3319ee68121.png"
              onAction={handlePopupTrigger}
            />
          </div>
          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Demolitio Strike"
              description="Lead your robots to victory, score goals, and show off your skills in an action-packed Robo Soccer battle."
              image="https://res.cloudinary.com/ddcuqfkyt/image/upload/v1768583356/robosoccer_scmc08.jpg"
              onAction={handlePopupTrigger}
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="robowar-event-section robowar-bg-section-3">
        <div className="robowar-event-container">
          <div className="robowar-event-cards" data-aos="fade-left">
            <GameCard
              title="Torque Cartel"
              description="Unleash your robots, push opponents out, and dominate the arena in Robo Sumo showdown!"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768246871/de83b2a7-fb6b-435f-a9da-1b5aeb48a27b.png"
              onAction={handlePopupTrigger}
            />
          </div>
          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Track Theft Auto"
              description="Program Robot's to Follow the Path with Precision and Speed! Conquer the Line Following Challenge"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768246887/8605c591-86e9-49a2-afc0-31782058b71d.png"
              onAction={handlePopupTrigger}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Robowar;
