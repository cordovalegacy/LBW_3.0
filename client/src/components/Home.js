import React from "react";
import Harley from '../img/harley.jpg';
import Company from '../img/midtier.JPG';
import Naruto from '../img/highend.JPG';
import Godzilla from '../img/supertier.JPG';
import Enthusiast from '../img/enthusiast.JPG';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <main>
                <h2 className="home-welcome">Welcome to Legacy Builds</h2>
                <h2 className="home-welcome-disclaimer">Examples of previously built computers within their respected ranks</h2>
                <div className="home-content-container">
                    <div id="home-content-photo">
                    <img className="home-content-gallery" src={Harley} alt='Harley' />
                    </div>
                    <div id="home-content-description">
                        <ul>
                            <h3>Starter</h3>
                            <li>From $850</li>
                            <li>1080p</li>
                            <li>i5 or Ryzen 5</li>
                            <li>Up to Rtx 3060</li>
                            <li>Performance Focus</li>
                            <button id="home-content-button" onClick={() => navigate('/builds/custom')}>Starter Configuration</button>
                        </ul>
                    </div>
                </div>
                <div className="home-content-container">
                <div id="home-content-photo">
                    <img className="home-content-gallery" src={Company} alt='Mid-Tier' />
                    </div>
                    <div id="home-content-description">
                        <ul>
                            <h3>Mid-Tier</h3>
                            <li>From $1300</li>
                            <li>Up to 1440p</li>
                            <li>Up to i7 or Ryzen 7</li>
                            <li>Up to Rtx 3070ti</li>
                            <li>Performance/Aesthetic Balance</li>
                            <button id="home-content-button" onClick={() => navigate('/builds/custom')}>Mid-Tier Configuration</button>
                        </ul>
                    </div>
                </div>
                <div className="home-content-container">
                <div id="home-content-photo">
                    <img className="home-content-gallery" src={Naruto} alt='High-End' />
                    </div>
                    <div id="home-content-description">
                        <ul>
                            <h3>High-End</h3>
                            <li>From $1800</li>
                            <li>1440p</li>
                            <li>Up to i9 or Ryzen 9</li>
                            <li>Up to Rtx 3080ti</li>
                            <li>More Performance, More Aesthetic</li>
                            <button id="home-content-button" onClick={() => navigate('/builds/custom')}>High-End Configuration</button>
                        </ul>
                    </div>
                </div>
                <div className="home-content-container">
                <div id="home-content-photo">
                    <img className="home-content-gallery" src={Godzilla} alt='Super-Tier' />
                    </div>
                    <div id="home-content-description">
                        <ul>
                            <h3>Super-Tier</h3>
                            <li>From $2500</li>
                            <li>4K</li>
                            <li>Up to i9 or Ryzen 9</li>
                            <li>Up to Rtx 3090ti</li>
                            <li>Extreme Performance</li>
                            <li>Extreme Aesthetic</li>
                            <button id="home-content-button" onClick={() => navigate('/builds/custom')}>Super-Tier Configuration</button>
                        </ul>
                    </div>
                </div>
                <div className="home-content-container">
                <div id="home-content-photo">
                    <img className="home-content-gallery" src={Enthusiast} alt='Enthusiast' />
                    </div>
                    <div id="home-content-description">
                        <ul>
                            <h3>Enthusiast</h3>
                            <li>$3500+</li>
                            <li>4K</li>
                            <li>i9, Ryzen 9, or Threadripper</li>
                            <li>Up to Rtx 3090ti</li>
                            <li>Best parts on the market</li>
                            <li>Maximum Performance and Aesthetic</li>
                            <button id="home-content-button" onClick={() => navigate('/builds/custom')}>Enthusiast Configuration</button>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;