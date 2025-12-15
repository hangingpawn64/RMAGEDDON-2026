import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Accommodation = () => {
    return (
        <>
            {/* Navbar Overlay */}
            <div className="top-0 left-0 w-full z-50 flex justify-center pt-6">
                <Navbar />
            </div>
            <div>Accommodation</div>
            <Footer />
        </>
    )
}

export default Accommodation