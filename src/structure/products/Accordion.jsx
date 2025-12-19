import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaRegCalendarCheck, FaAward, FaBox } from "react-icons/fa"; // Calendar check
import "./Accordion.scss";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="accordion-container">
                {Object.entries(items).map(([title, content], index) => (
                    <div key={index} className={`accordion ${openIndex === index ? 'open' : ''}`}>
                        <div className="accordion-header" onClick={() => toggle(index)}>
                            <h3>{title}</h3>
                            <IoChevronDown
                                className={`arrow-icon ${openIndex === index ? "rotate" : ""}`}
                            />
                        </div>

                        {openIndex === index && (
                            <div className="accordion-content">
                                {typeof content === 'string' && (title === 'SPECS' || content.includes('\n') || content.includes('•')) ? (
                                    <ul className="specs-list">
                                        {content
                                            .split('\n')
                                            .map((line) => line.trim())
                                            .filter(Boolean)
                                            .map((line, idx) => (
                                                <li key={idx}>{line.replace(/^•\s*/, '')}</li>
                                            ))}
                                    </ul>
                                ) : (
                                    <p>{content}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="warranty-bar">

                <div className="feature-item">
                    <FaRegCalendarCheck />
                    <div className="feature-text">
                        <p>30 Days</p>
                        <p>Risk-Free Trial</p>
                    </div>
                </div>

                <div className="feature-item">
                    <FaAward />
                    <div className="feature-text">
                        <p>2 year+ </p>
                        <p>warranty</p>
                    </div>
                </div>

                <div className="feature-item">
                    <FaBox />
                    <div className="feature-text">
                        <p>Free Shipping Worldwide</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
