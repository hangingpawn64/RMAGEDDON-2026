import bgVideo from '../assets/videos/bgvideo.mp4';
import Navbar from './Navbar';
import Footer from './Footer';
export default function HomePage() {
    return (
        <>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/hero-poster.jpg" // optional but recommended
                    aria-hidden="true"
                >
                    {/* Add your video src here */}
                    <source src={bgVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay (improves text readability) */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Navbar Overlay */}
                <div className="absolute top-0 left-0 w-full z-50 flex justify-center pt-6">
                    <Navbar />
                </div>
            </section>
            <Footer/>
        </>
    );
}
