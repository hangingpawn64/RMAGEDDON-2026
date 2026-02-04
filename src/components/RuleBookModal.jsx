import React from 'react';
import './RuleBookModal.css';

const RuleBookModal = ({ isOpen, onClose, pdfUrl }) => {
    if (!isOpen) return null;

    const getDownloadLink = (url) => {
        if (!url) return "#";
        // Convert "preview" to "view" to allow downloading from the Google Drive viewer
        return url.replace(/\/preview$/, '/view');
    };

    return (
        <div className="rulebook-modal-overlay" onClick={onClose}>
            <div className="rulebook-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="rulebook-actions">
                    {pdfUrl && (
                        <a
                            href={getDownloadLink(pdfUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rulebook-btn rulebook-download-button"
                        >
                            Download Rule Book
                        </a>
                    )}
                    <button className="rulebook-btn rulebook-close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="rulebook-pdf-container">
                    {pdfUrl ? (
                        <iframe
                            src={pdfUrl}
                            title="Rulebook"
                            className="rulebook-iframe"
                            allow="autoplay"
                        ></iframe>
                    ) : (
                        <div className="rulebook-placeholder">
                            <p>Trevor is updating the Rule Book. Stay Tuned!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RuleBookModal;
