import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

// Import both libraries' CSS
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import certificate1 from '../../assets/img/NucampCertificates/Nucamp_August_2022.jpg';
import certificate2 from '../../assets/img/NucampCertificates/Nucamp_October_2022.jpg';
import certificate3 from '../../assets/img/NucampCertificates/Nucamp_November_2022.jpg';
import certificate4 from '../../assets/img/NucampCertificates/Nucamp_December_2022.jpg';
import certificate5 from '../../assets/img/NucampCertificates/Nucamp_January_2023.jpg';
import certificate6 from '../../assets/img/NucampCertificates/Nucamp_March_2023.jpg';
import certificate7 from '../../assets/img/NucampCertificates/Nucamp_April_2023.jpg';
import certificate8 from '../../assets/img/NucampCertificates/Nucamp_May_2023.jpg';
import certificate9 from '../../assets/img/NucampCertificates/Nucamp_May_2023_Full.jpg';

const Slideshow = ({ isNewStyle }) => {
    const [index, setIndex] = useState(0);

    const slides = [
        { id: 1, image: certificate1 },
        { id: 2, image: certificate2 },
        { id: 3, image: certificate3 },
        { id: 4, image: certificate4 },
        { id: 5, image: certificate5 },
        { id: 6, image: certificate6 },
        { id: 7, image: certificate7 },
        { id: 8, image: certificate8 },
        { id: 9, image: certificate9 },
    ];

    const handleOnChange = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // New style using react-slick
    if (isNewStyle) {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: current => setIndex(current),
        };

        return (
            <div className="new-slideshow-container" style={{ width: '50%', margin: '0 auto' }}>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} style={{ textAlign: 'center' }}>
                            <img 
                                src={slide.image} 
                                alt={`Slide ${slide.id}`}
                                style={{ 
                                    maxWidth: '50%',
                                    width: 'auto', 
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        );        
    } 

    else {
        return (
            <div>
                <Carousel 
                    selectedItem={index} 
                    showThumbs={false} 
                    onChange={handleOnChange}
                >
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <img 
                                src={slide.image} 
                                alt={`Slide ${slide.id}`}
                                style={{ 
                                    maxWidth: '25%', 
                                    maxHeight: '25%', 
                                    width: 'auto', 
                                    height: 'auto' 
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
};

export default Slideshow;
