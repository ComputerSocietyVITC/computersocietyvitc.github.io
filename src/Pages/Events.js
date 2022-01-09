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
    },[])
    useEffect(() => {
        document.getElementById("starrybg").style.background = "linear-gradient(180deg, rgba(23, 23, 23, 0) 6.68%, rgba(52, 80, 154, 0.29) 64.84%, rgba(151, 169, 204, 0.439818) 81.37%, rgba(255, 255, 255, 0.45) 98.87%)";
    },[])
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
            {loading ? <Loader/> :
            (<div>
                <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                    <h1>EVENTS</h1>
                </div>
                <div>
                    <div className='relative z-10'>
                        <button onClick={sliderRef?.slickPrev} className='absolute left-2 md:left-16 top-80'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={sliderRef?.slickNext} className='absolute right-2 md:right-16 top-80'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div id="carousel" className='mb-16'>
                        <Slider ref={setSliderRef} {...sliderSettings} className='mx-16 md:mx-28'>
                            {eventslist.map((event) => (
                                <div key={event.serial_no}>
                                    <div className='md:my-6'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 md:mt-12'>
                                            <div className='ml-auto md:h-2/3 md:mt-16'>
                                                <img src={event.image} alt={event.event} className='w-full h-full' />
                                            </div>
                                            <div className='text-lg md:text-2xl font-medium text-justify md:mr-20 p-3 py-6 md:p-16 md:pb-0 bg-bgcolor1' id='carouselcard'>
                                                <h1 className='text-4xl md:text-6xl uppercase font-semibold mb-6 md:mb-10'>{event.event}</h1>
                                                <span className='text-xl md:text-2xl font-medium text-comsocgreen'>{event.date}</span>
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
