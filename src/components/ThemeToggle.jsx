import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.scss';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? <FaSun className="icon sun" /> : null}
        </button>
    );
};

export default ThemeToggle;

