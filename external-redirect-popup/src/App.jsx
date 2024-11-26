import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Popup from './Popup';
import './App.css';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');

    const handleLinkClick = (e, url) => {
        e.preventDefault();
        setRedirectUrl(url);
        setShowPopup(true);
    };

    const handleConfirm = () => {
        setShowPopup(false);
        window.location.href = redirectUrl;
    };

    const handleCancel = () => {
        setShowPopup(false);
        setRedirectUrl('');
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="https://google.com" onClick={(e) => handleLinkClick(e, 'https://google.com')}>External Link</a>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            {showPopup && (
                <Popup
                    message="Ви точно хочите залишити сайт??"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </Router>
    );
}
export default App;
