import React from 'react'
import { Link } from "react-router-dom";

import error from '../images/404.svg'

const Error = () => {
    React.useEffect(() => {
        document.getElementById("starrybg").style.background = "Black";
    }, [])

    return (
        <div className='mb-20 -mt-5'>
            <div className=" relative z-10 mx-4 lg:mx-auto ">
                <img src={error} alt="404" className='mx-auto md:w-2/5 lg:w-2/5' />
            </div>
            <h1 className='font-sans text-center text-6xl -mt-5 text-comsocgreen lg:-mt-20 lg:text-8xl'>lost in space</h1>
            <h1 className='font-sans text-center text-xl lg:text-3xl mt-4'>you have reached the edge of universe</h1>

            <Link to="/">
                <button
                    type="submit"
                    className=" mt-8 bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
                >
                    Back to home
                </button>
            </Link>
        </div>
    )
}

export default Error
