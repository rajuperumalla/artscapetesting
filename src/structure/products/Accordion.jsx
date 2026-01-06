import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaRegCalendarCheck, FaAward, FaBox } from "react-icons/fa";
import "./Accordion.scss";

const Accordion = ({ items, showWarrantyBar = true }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-wrapper">
            <div className="accordion-container">
                {Object.entries(items).map(([title, content], index) => (
                    <div key={index} className={`accordion-item neu-lifted ${openIndex === index ? 'open' : ''}`}>
                        <div className="accordion-header" onClick={() => toggle(index)}>
                            <h3>{title}</h3>
                            <div className={`icon-wrapper neu-lifted ${openIndex === index ? 'active' : ''}`}>
                                <IoChevronDown className="arrow-icon" />
                            </div>
                        </div>

                        <div className={`accordion-content ${openIndex === index ? 'expanded' : ''}`}>
                            <div className="content-inner">
                                {typeof content === 'string' && (title === 'SPECS' || content.includes('\n') || content.includes('•')) ? (
                                    <ul className="specs-list">
                                        {content
                                            .split('\n')
                                            .map((line) => line.trim())
                                            .filter(Boolean)
                                            .map((line, idx) => (
                                                <li key={idx} className="neu-pressed">
                                                    <span>{line.replace(/^•\s*/, '')}</span>
                                                </li>
                                            ))}
                                    </ul>
                                ) : (
                                    <p className="simple-text">{content}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showWarrantyBar && (
                <div className="lifestyle-warranty-bar neu-lifted">
                    <div className="warranty-item">
                        <div className="icon-circle neu-pressed"><FaRegCalendarCheck /></div>
                        <div className="w-text">
                            <span className="w-val">30 Days</span>
                            <span className="w-label">Risk-Free Trial</span>
                        </div>
                    </div>

                    <div className="warranty-item">
                        <div className="icon-circle neu-pressed"><FaAward /></div>
                        <div className="w-text">
                            <span className="w-val">2 Year+</span>
                            <span className="w-label">Global Warranty</span>
                        </div>
                    </div>

                    <div className="warranty-item">
                        <div className="icon-circle neu-pressed"><FaBox /></div>
                        <div className="w-text">
                            <span className="w-val">Wait-Free</span>
                            <span className="w-label">Global Shipping</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;

