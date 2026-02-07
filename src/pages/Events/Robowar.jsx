import { useEffect, useState } from "react";
import "./Robowar.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WarCarousel from "../../components/WarCarousel.jsx"
import GameCard from "../../components/Cards/GameCard";
import AnimatedButton from "../../components/AnimatedButton";
import TechPopup from "../../components/TechPopup";
import RuleBookModal from "../../components/RuleBookModal";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Robowar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRulebook, setShowRulebook] = useState(false);
  const [activeRulebookUrl, setActiveRulebookUrl] = useState("");

  // Rulebook URLs
  const MAIN_RULEBOOK = "https://drive.google.com/file/d/10aYKbRyuOlBNa00jmpv27rsoMPsWTg1U/view?usp=sharing";
  const VINEWOOD_VELOCITY_RULEBOOK = "https://drive.google.com/file/d/1zZ02Rbqcb4HaBCf3NezAtNHsC2vNqbH7/view?usp=sharing";
  const DEMOLITION_STRIKE_RULEBOOK = "https://drive.google.com/file/d/13D2qiTbhcJnxHmaO-Lc1vhDnFeYEuf_L/view?usp=sharing";
  const TORQUE_CARTEL_RULEBOOK = "https://drive.google.com/file/d/14R-L9P8vwwwBeD0kZTovfpRGzXmdEFS7/view?usp=sharing";
  const TRACK_THEFT_AUTO_RULEBOOK = "https://drive.google.com/file/d/1uPQhoKEWV-FwjGO2qAOsGeqpfs5QzCWG/view?usp=sharing";

  // Register URLs
  const ROBOWAR_8KG_REGISTER_URL = "https://unstop.com/p/robowar-8kg-rmageddon-2026-shri-guru-gobind-singhji-institute-of-engineering-and-technology-sggsiet-nanded-1636771";
  const ROBOWAR_16KG_REGISTER_URL = "https://unstop.com/p/robowar-16kg-rmageddon-2026-shri-guru-gobind-singhji-institute-of-engineering-and-technology-sggsiet-nanded-1636806";
  const VINEWOOD_VELOCITY_REGISTER_URL = "https://unstop.com/p/vinewood-velocity-rmageddon-2026-shri-guru-gobind-singhji-institute-of-engineering-and-technology-sggsiet-nanded-1636817";
  const DEMOLITION_STRIKE_REGISTER_URL = "https://unstop.com/p/track-theft-auto-line-follower-robot-rmageddon-2026-shri-guru-gobind-singhji-institute-of-engineering-and-technology-s-1636822";
  const TORQUE_CARTEL_REGISTER_URL = "https://unstop.com/o/NalouD1?lb=cOmODb4Q&utm_medium=Share&utm_source=rnxgsgg5892&utm_campaign=Competitions";
  const TRACK_THEFT_AUTO_REGISTER_URL = "https://unstop.com/o/06LaXDo?lb=cOmODb4Q&utm_medium=Share&utm_source=rnxgsgg5892&utm_campaign=Competitions";

  const handleOpenRulebook = (url) => {
    // setActiveRulebookUrl(url);
    // setShowRulebook(true);
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleRegister = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      handlePopupTrigger();
    }
  };

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
      {/* <RuleBookModal
        isOpen={showRulebook}
        onClose={() => setShowRulebook(false)}
        pdfUrl={activeRulebookUrl}
      /> */}
      {/* NAVBAR */}
      <div className="top-0 left-0 w-full z-50 flex justify-center events-navbar-wrapper" data-aos="fade-down" data-aos-delay="0">
        <Navbar />
      </div>

      {/* ================= ROBOWAR SECTION ================= */}
      <section className="robowar-container">
        <div className="robowar-left">
          <div className="robowar-left-content">

            <div className="robowar-header" data-aos="zoom-in" data-aos-delay="500">
              <p className="robowar-title">ROBOWARS</p>
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
              <AnimatedButton text="REGISTER (8KG)" onClick={() => handleRegister(ROBOWAR_8KG_REGISTER_URL)} />
              <AnimatedButton text="REGISTER (16KG)" onClick={() => handleRegister(ROBOWAR_16KG_REGISTER_URL)} />
              <AnimatedButton text="RULE BOOK" onClick={() => handleOpenRulebook(MAIN_RULEBOOK)} />
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
              onRegister={() => handleRegister(VINEWOOD_VELOCITY_REGISTER_URL)}
              onRuleBook={() => handleOpenRulebook(VINEWOOD_VELOCITY_RULEBOOK)}
            />
          </div>
          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Demolition Strike"
              description="Lead your robots to victory, score goals, and show off your skills in an action-packed Robo Soccer battle."
              image="https://res.cloudinary.com/ddcuqfkyt/image/upload/v1768583356/robosoccer_scmc08.jpg"
              onRegister={() => handleRegister(DEMOLITION_STRIKE_REGISTER_URL)}
              onRuleBook={() => handleOpenRulebook(DEMOLITION_STRIKE_RULEBOOK)}
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
              onRegister={() => handleRegister(TORQUE_CARTEL_REGISTER_URL)}
              onRuleBook={() => handleOpenRulebook(TORQUE_CARTEL_RULEBOOK)}
            />
          </div>
          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Track Theft Auto"
              description="Program Robot's to Follow the Path with Precision and Speed! Conquer the Line Following Challenge"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768246887/8605c591-86e9-49a2-afc0-31782058b71d.png"
              onRegister={() => handleRegister(TRACK_THEFT_AUTO_REGISTER_URL)}
              onRuleBook={() => handleOpenRulebook(TRACK_THEFT_AUTO_RULEBOOK)}
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
