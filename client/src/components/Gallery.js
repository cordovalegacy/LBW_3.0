import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Harley from '../img/harley.jpg';
import Enthusiast from '../img/enthusiast.JPG';
import HighEnd from '../img/highend.JPG';
import MidTier from '../img/midtier.JPG';
import SuperTier from '../img/supertier.JPG';
import Aurora from '../img/aurora.jpg';
import Batman from '../img/batman.jpg';
import Thanos from '../img/thanos.jpg';
import George from '../img/george.jpg';
import Captain from '../img/captainamerica.jpg';
import Cyborg from '../img/cyborg.jpg';
import HulkBuster from '../img/hulkbuster.jpg';
import Mew from '../img/mew.jpg';
import Mike from '../img/mike.jpg';
import NarutoOrange from '../img/narutoorange.jpg';
import NarutoYellow from '../img/narutoyellow.jpg';
import PunisherRed from '../img/punisherred.jpg';
import SpiderMan from '../img/spiderman.jpg';
import SuperMan from '../img/superman.jpg';
import Vader from '../img/vader.jpg';
import VenomHulk from '../img/venomhulk.jpg';
import WarMachine from '../img/warmachine.jpg';
import WonderWoman from '../img/wonderwoman.jpg';
import ZombieHulk from '../img/zombiehulk.jpg';

const Gallery = () => {


    return (
        <div className='gallery-container'>
            <div className='gallery-wrapper'>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <img id='img-width' src={Harley} alt='Harley' />
                        </div>
                        <div>
                            <img id='img-width' src={Aurora} alt='Harley' />
                        </div>
                        <div>
                            <img id='img-width' src={Enthusiast} alt='Punisher' />
                        </div>
                        <div>
                            <img id='img-width' src={HighEnd} alt='Anime' />
                        </div>
                        <div>
                            <img id='img-width' src={MidTier} alt='Custom' />
                        </div>
                        <div>
                            <img id='img-width' src={SuperTier} alt='Godzilla' />
                        </div>
                        <div>
                            <img id='img-width' src={Batman} alt='Batman' />
                        </div>
                        <div>
                            <img id='img-width' src={George} alt='George' />
                        </div>
                        <div>
                            <img id='img-width' src={Thanos} alt='Thanos' />
                        </div>
                        <div>
                            <img id='img-width' src={Captain} alt='Captain' />
                        </div>
                        <div>
                            <img id='img-width' src={Cyborg} alt='Cyborg' />
                        </div>
                        <div>
                            <img id='img-width' src={HulkBuster} alt='HulkBuster' />
                        </div>
                        <div>
                            <img id='img-width' src={Mew} alt='Mew' />
                        </div>
                        <div>
                            <img id='img-width' src={Mike} alt='Mike' />
                        </div>
                        <div>
                            <img id='img-width' src={NarutoOrange} alt='Naruto' />
                        </div>
                        <div>
                            <img id='img-width' src={NarutoYellow} alt='Naruto' />
                        </div>
                        <div>
                            <img id='img-width' src={PunisherRed} alt='Punisher' />
                        </div>
                        <div>
                            <img id='img-width' src={SpiderMan} alt='Spidey' />
                        </div>
                        <div>
                            <img id='img-width' src={SuperMan} alt='SuperMan' />
                        </div>
                        <div>
                            <img id='img-width' src={Vader} alt='Vader' />
                        </div>
                        <div>
                            <img id='img-width' src={VenomHulk} alt='VenomHulk' />
                        </div>
                        <div>
                            <img id='img-width' src={WarMachine} alt='WarMachine' />
                        </div>
                        <div>
                            <img id='img-width' src={WonderWoman} alt='WonderWoman' />
                        </div>
                        <div>
                            <img id='img-width' src={ZombieHulk} alt='ZombieHulk' />
                        </div>
                    </Carousel>
            </div>
        </div>
        )
    }

export default Gallery;