import { useState, useEffect, useRef } from 'react';
// import bgVideo from '../../assets/videos/bgvideo.mp4';
// import bgVideo from '/homeBG.jpeg';
import "./HomePage.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SponsorSection from './SponsorSection';
import Home_page3 from './Home_page3';
import Hero from './Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

// need to use Date.now() for proper timer.
export default function HomePage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [mapRotation, setMapRotation] = useState(0);
    const mapRef = useRef(null);
    // Set your target date here (YYYY-MM-DDTHH:mm:ss)
    const TARGET_DATE = new Date('2026-02-27T00:00:00').getTime();

    const calculateTimeLeft = () => {
        const now = Date.now();
        const difference = TARGET_DATE - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out',
            mirror: true
        });
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = calculateTimeLeft();
            setTimeLeft(updatedTime);

            if (updatedTime.days === 0 && updatedTime.hours === 0 &&
                updatedTime.minutes === 0 && updatedTime.seconds === 0) {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 60;
        const moveY = (clientY - window.innerHeight / 2) / 60;
        setMousePos({ x: moveX, y: moveY });

        if (mapRef.current) {
            const rect = mapRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate rotation to point at cursor
            const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
            const angleDeg = (angleRad * 180) / Math.PI + 90; // +90 to align the "top" of the image to the cursor

            setMapRotation(angleDeg);
        }

    };

    return (
        <>
            <section
                className="relative min-h-screen w-full home-hero-section"
                onMouseMove={handleMouseMove}
            >
                {/* Background Image */}
                <img
                    src={"https://res.cloudinary.com/dqm1ixpcb/image/upload/v1768334099/homeBG_evsawk.jpg"}
                    alt="Background"
                    className="home-bg-image absolute inset-0 h-full w-full object-cover opacity-95"
                    aria-hidden="true"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Navbar Overlay */}
                <div className="absolute top-0 left-0 w-full z-50 flex justify-center" data-aos="fade-down" data-aos-delay="200">
                    <Navbar />
                </div>

                {/* Character - Positioned at bottom */}
                <div
                    className="home-character-wrapper"
                    data-aos="fade-up-right"
                    data-aos-delay="1500"
                >
                    <img
                        src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767861627/character_s8jvg0.png"
                        alt="character"
                        className="home-character-img"
                        style={{
                            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`
                        }}
                    />
                </div>

                {/* Content Wrapper */}
                <div className="home-content-wrapper relative z-10 min-h-screen flex flex-col items-center justify-start py-2 px-6 lg:px-10 gap-y-2">

                    {/* Heading */}
                    <h1 className='home-heading' data-aos="zoom-in" data-aos-delay="500">RMAGEDDON 2026</h1>

                    {/* Main Content Grid */}
                    <div className="home-main-content-grid w-full flex flex-row lg:flex-row justify-between items-center max-w-full gap-6 lg:gap-10">

                        {/* Left: Countdown */}
                        <div className="home-countdown-container home-glass-panel" data-aos="fade-right" data-aos-delay="1000">
                            <h3 className="home-panel-title">TIME REMAINING</h3>
                            <div className="home-timer-grid">
                                <div className="home-time-unit">
                                    <div className="home-time-value"><span>{String(timeLeft.days).padStart(2, '0')}</span></div>
                                    <div className="home-time-label">DAYS</div>
                                </div>
                                <div className="home-time-separator">
                                    <span>.</span>
                                    <span></span>
                                </div>
                                <div className="home-time-unit">
                                    <div className="home-time-value"><span>{String(timeLeft.hours).padStart(2, '0')}</span></div>
                                    <div className="home-time-label">HOURS</div>
                                </div>
                                <div className="home-time-separator">
                                    <span>.</span>
                                    <span></span>
                                </div>
                                <div className="home-time-unit">
                                    <div className="home-time-value"><span>{String(timeLeft.minutes).padStart(2, '0')}</span></div>
                                    <div className="home-time-label">MINUTES</div>
                                </div>
                                <div className="home-time-separator">
                                    <span>.</span>
                                    <span></span>
                                </div>
                                <div className="home-time-unit">
                                    <div className="home-time-value"><span>{String(timeLeft.seconds).padStart(2, '0')}</span></div>
                                    <div className="home-time-label">SECONDS</div>
                                </div>
                            </div>
                        </div>
                        {/* Center: Logo & Character */}
                        <div className="home-center-content relative" style={{ perspective: '1000px' }}>
                            <div className="home-logo-float-wrapper">
                                <img
                                    src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767861627/logo_opd1mq.png"
                                    alt="logo"
                                    className="home-center-logo"
                                    data-aos="zoom-in"
                                    data-aos-delay="0"
                                />
                            </div>
                        </div>

                        {/* Right: Info Box */}
                        <div className="home-info-container home-glass-panel" data-aos="fade-left" data-aos-delay="1000">
                            <div className="home-info-row">
                                <span className="home-info-label">GAMES:</span>
                                <span className="home-info-value home-text-cyan">4+</span>
                            </div>
                            <div className="home-info-row">
                                <span className="home-info-label">DATES:</span>
                                <span className="home-info-value home-text-cyan">27FEB - 1MAR</span>
                            </div>
                            <div className="home-info-row">
                                <span className="home-info-label">PRIZE POOL:</span>
                                <span className="home-info-value home-text-cyan">upto 2 Lakhs</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="home-bottom-section-grid w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
                        {/* Map */}
                        <div className="home-map-wrapper" data-aos="fade-right" data-aos-delay="1500" ref={mapRef}>
                            <div
                                className="home-map-tilt-container"
                                style={{
                                    transform: `rotate(${mapRotation}deg)`
                                }}
                            >
                                <a href="https://maps.app.goo.gl/t1SdmXCSgqNS2Fjf9" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/dqm1ixpcb/image/upload/v1768334472/map_p4lywo.png" alt="map" className="home-map-img" />
                                </a>
                            </div>
                        </div>
                        {/* Mission Text */}
                        <div className="home-mission-container" data-aos="fade-up" data-aos-delay="1500">
                            <h2 className="home-mission-title">
                                <span className="home-text-red">Mission Start :</span> Build, Battle, Dominate
                            </h2>
                            <p className="home-mission-desc">
                                Gear Up, Crew! RMAGEDDON 2026 Drops You Right Into A High-Stakes Robotics Showdown.
                                Assemble Your Squad, Upgrade Your Bot, And Rise Through The Ranks Of Los Bot-Santos.
                                Earn Respect, Claim Titles, And Rule The Streets With Engineering Mastery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <SponsorSection />
            <Home_page3 />
            <Hero />
            <Footer />
        </>
    );
}
