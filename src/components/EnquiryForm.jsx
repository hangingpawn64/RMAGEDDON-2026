import React, { useEffect } from 'react';

const EnquiryForm = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-8 transform transition-all animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-white mb-6 font-saira">Drop us a message</h2>

                <form className="space-y-4 font-saira" onSubmit={(e) => e.preventDefault()}>
                    {/* Name Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                        <input
                            type="text"
                            placeholder="Akshit Tupkar"
                            className="w-full bg-[#1a1a1a] text-white border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder-gray-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                        <input
                            type="email"
                            placeholder="akshit@example.com"
                            className="w-full bg-[#1a1a1a] text-white border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder-gray-500"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Inquiry"
                            className="w-full bg-[#1a1a1a] text-white border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder-gray-500"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                        <textarea
                            rows="4"
                            placeholder="I'd like to ask..."
                            className="w-full bg-[#1a1a1a] text-white border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder-gray-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -rotate-12 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Query
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
