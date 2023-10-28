/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Slick-Slider
 *@developer Sudhanshu
 */

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
const SlickSlider = ({ slider }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const settingsMain = {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        fade: true,
        asNavFor: '.slider-nav',

    };

    const settingsThumbs = {
        slidesToShow: 8.5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        swipeToSlide: true,
        infinite: false,
        focusOnSelect: true,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8.5,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4.5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3.5,
                },
            },
        ],
    };
    return (
        <div className="slider-wrapper">
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
                className='slickSlider'
            >

                {slider.map((slide) =>
                    <div className="slick-slide main-slide" key={slide.id}>
                        <img className="slick-slide-image" src={slide.largeImg} />
                    </div>
                )}

            </Slider>
            <div className="thumbnail-slider-wrap mt-6">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}  className="thumbSlider">

                    {slider.map((slide) =>
                        <div className="slick-slide thumb-slide" key={slide.id}>
                            <img className="slick-slide-image" src={slide.thumbImg} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default SlickSlider;