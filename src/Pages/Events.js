import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import Mountains from "../components/Mountains";
import eventslist from '../components/carousel/eventslist';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../components/loader/Loader";

const Events = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    useEffect(() => {
        document.getElementById("starrybg").style.background = "linear-gradient(180deg, rgba(23, 23, 23, 0) 6.68%, rgba(52, 80, 154, 0.29) 64.84%, rgba(151, 169, 204, 0.439818) 81.37%, rgba(255, 255, 255, 0.45) 98.87%)";
    }, [])
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        customPaging: function (i) {
            return (
                <a>
                    <div className='h-3 w-3 rounded-lg bg-white'></div>
                </a>
            );
        }
    }

    return (
        <div>
            {loading ? <Loader /> :
                (<div>
                    <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                        <h1>EVENTS</h1>
                    </div>
                    <div>
                        <div className='relative z-10'>
                            <button onClick={sliderRef?.slickPrev} className='absolute left-2 lg:left-16 top-80'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-12 lg:w-12 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={sliderRef?.slickNext} className='absolute right-2 lg:right-16 top-80'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-12 lg:w-12 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div id="carousel" className='lg:-mb-16 sm:w-5/6 mx-auto lg:w-full'>
                            <Slider ref={setSliderRef} {...sliderSettings} className='mx-12 lg:mx-28'>
                                {eventslist.map((event) => (
                                    <div key={event.serial_no}>
                                        <div className='lg:my-6'>
                                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:mt-12'>
                                                <div className='ml-auto lg:h-2/3 lg:mt-16'>
                                                    <img src={event.image} alt={event.event} className='w-full h-full' />
                                                </div>
                                                <div className='overflow-auto text-lg lg:text-2xl font-medium text-justify lg:mr-20 p-3 py-6 lg:p-16 lg:pb-0 bg-bgcolor1' id='carouselcard'>
                                                    <h1 className='text-4xl lg:text-6xl uppercase font-semibold mb-6 lg:mb-10'>{event.event}</h1>
                                                    <span className='text-xl lg:text-2xl font-medium text-comsocgreen'>{event.date}</span>
                                                    <br /><br />
                                                    {event.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <Mountains />
                </div>)
            }
        </div>
    )
}

export default Events
