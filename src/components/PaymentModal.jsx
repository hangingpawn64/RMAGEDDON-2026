import React from 'react';
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfT9ZCYHnnxA1WUGkg32iiwtxrOIfyN-0O4LR7QLiJQ-f7cXw/viewform?usp=sharing&ouid=106605480803419039664';

    const handleSbiCollectRedirect = () => {
        window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', '_blank');
    };

    const handleGoogleFormRedirect = () => {
        window.open(GOOGLE_FORM_URL, '_blank');
    };

    return (
        <div className="payment-modal-overlay" onClick={onClose} onWheel={(e) => e.stopPropagation()}>
            <div className="payment-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="payment-close-button" onClick={onClose}>&times;</button>

                <div className="payment-content-scroll">
                    <div className=".
                    .
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    .
                    
                    3
                    
                    33
                    
                    .
                    "></div>
                    <h2 className="payment-title">💳 Payment Process – RMAGEDDON 2026</h2>

                    <div className="payment-fees-section">
                        <h3 className="payment-subtitle">🎫 Registration Fees</h3>
                        <table className="payment-fees-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Early Bird</th>
                                    <th>Total Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Robowar 8KG</td>
                                    <td className="no-early-bird">—</td>
                                    <td>₹999</td>
                                </tr>
                                <tr>
                                    <td>Robowar 16KG</td>
                                    <td className="no-early-bird">—</td>
                                    <td>₹1499</td>
                                </tr>
                                <tr>
                                    <td>Vinewood Velocity</td>
                                    <td className="early-bird-price">₹299</td>
                                    <td>₹399</td>
                                </tr>
                                <tr>
                                    <td>Demolition Strike</td>
                                    <td className="early-bird-price">₹299</td>
                                    <td>₹399</td>
                                </tr>
                                <tr>
                                    <td>Torque Cartel</td>
                                    <td className="early-bird-price">₹299</td>
                                    <td>₹399</td>
                                </tr>
                                <tr>
                                    <td>Track Theft Auto</td>
                                    <td className="early-bird-price">₹299</td>
                                    <td>₹399</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="payment-alert">
                        All game registrations for RMAGEDDON 2026 must be completed only through SBI Collect.
                        Please follow the steps carefully. Incorrect payment details or amount will lead to rejection of registration.
                    </p>

                    <h3 className="payment-subtitle">📝 Step-by-Step Payment Instructions</h3>

                    <ul className="payment-steps">
                        <li>Visit the SBI Collect website.</li>

                        <li>
                            In <strong>Select Category</strong>, choose:
                            <div className="payment-highlight">Educational Institutes</div>
                        </li>

                        <li>
                            In <strong>Select Payee</strong>, choose:
                            <div className="payment-highlight">SHRI GURU GOBIND SINGHJI INST OF ENGG AND TECH NED</div>
                        </li>

                        <li>
                            In <strong>Payment Category</strong>, select:
                            <div className="payment-highlight">RMAGEDDON-2026</div>
                        </li>

                        <li>
                            Fill in the required details.
                            <br />
                            <span className="payment-note">⚠️ Note: If your academic year is not listed, select “Final Year”.</span>
                        </li>

                        <li>
                            In the <strong>Event Amount</strong> section, enter the exact amount for your selected game.
                            <br />
                            <span className="payment-warning">❗ Registration will be rejected if the amount entered is incorrect.</span>
                        </li>

                        <li>Choose a payment method as per your convenience.</li>

                        <li>Complete the payment and download/save the payment receipt.</li>
                    </ul>

                    <h3 className="payment-subtitle">📄 After Payment</h3>
                    <ul className="payment-steps">
                        <li>Return to the RMAGEDDON 2026 website (you are already here).</li>
                        <li>Fill out the Google Form for payment details.</li>
                        <li>Upload/enter the required payment information as asked.</li>
                    </ul>

                    <h3 className="payment-subtitle">🎉 Early Bird Refund</h3>
                    <p className="payment-text">
                        Participants who complete registration before the Early Bird deadline (17th February)
                        will receive the Early Bird refund at the event venue.
                    </p>

                    <div className="payment-action-area">
                        <p className="payment-action-text">👇 Click the buttons below to proceed</p>
                        <div className="payment-buttons-row">
                            <button className="payment-sbi-button" onClick={handleSbiCollectRedirect}>
                                Proceed to SBI Collect
                            </button>
                            <button className="payment-google-form-button" onClick={handleGoogleFormRedirect}>
                                Submit Google Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
