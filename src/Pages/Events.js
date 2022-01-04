import React, { useState } from 'react'
import Slider from "react-slick";
import Mountains from "../components/Mountains";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const ref = React.createRef();

    const sliderSettings = {
        arrows: false,
        slidesToShow: 5,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const hotelCards = [
        {
            imageSrc:
                'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            title: 'Studio Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 50/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 80/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'King Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 150/Day',
            features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 80/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'King Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 150/Day',
            features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Royal Suite',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 299/Day',
            features: [
                'Free Wifi',
                'Free breakfast',
                'Discounted Meals',
                "MacBook for work use (hotel's property)",
            ],
        },
    ]

    return (
        <div>
            <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                <h1>EVENTS</h1>
            </div>
            {/* <div className='mx-auto h-96 w-64 relative my-28'>
                <div className='h-96 w-64 bg-gray-300 absolute left-0 top-0 z-10'></div>
                <div className='h-96 w-64 bg-gray-300 absolute left-2/3 bottom-6 opacity-75'></div>
                <div className='h-96 w-64 bg-gray-300 absolute right-2/3 bottom-6 opacity-75'></div>
                <div className='h-96 w-64 bg-gray-300 absolute bottom-12 opacity-50' style={{ left: "115%" }}></div>
                <div className='h-96 w-64 bg-gray-300 absolute bottom-12 opacity-50' style={{ right: "115%" }}></div>
            </div> */}

            <div className='my-24'>
                <div className='relative z-10'>
                    <button onClick={sliderRef?.slickPrev} className='absolute left-8 top-44'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={sliderRef?.slickNext} className='absolute right-8 top-44'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings} className='px-28'>
                    {hotelCards.map((card, index) => (
                        <div key={index} ref={ref}>
                            <img src={card.imageSrc} alt={card.title} className='h-96 w-full' />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <Mountains /> */}
        </div>
    )
}

export default Events
