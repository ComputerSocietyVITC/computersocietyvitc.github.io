import React, { useRef } from 'react'

import teamimage from "../images/teamimage.png"
import down from "../images/down.png"

const Team = () => {

    const obRef = useRef(null)

    return (
        <div>
            <div className="h-full pt-32">
                <div className="grid grid-cols-2 gap-2">
                    <div className="sm:ml-40 mt-48">
                        <h1 className="text-6xl text-left"><span className="text-comsocgreen">The</span> Team</h1>
                        <p className="text-2xl text-left mt-6">Presenting the board of 2021-2022</p>
                    </div>
                    <div className="mt-20">
                        <img src={teamimage} alt="Team Image"></img>
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <img
                        onClick={() => obRef.current.scrollIntoView({ behavior: "smooth" })}
                        src={down}
                        alt="down arrow"
                        className="w-12 h-12 items-center m-4"
                    />
                </div>
            </div>
            <div className="pt-1">
                <h1 className="text-5xl my-10 mb-24" ref={obRef}>Office Bearers</h1>
                <div className="grid grid-cols-2 gap-52">
                    <div className="grid justify-items-end">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Samank Gupta</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Tanay Bhadula</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Vice President</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-20 my-24">
                    <div className="grid justify-items-end">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Sanika Kulkarni</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">General Secretary</h2>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Mainak Sengupta</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Technical Head</h2>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Swapnal Varma</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Joint General Secretary</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-20 mb-24">
                    <div className="grid justify-items-end">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Tejas Vaichole</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Design Head</h2>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Gunja Pandey</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Public Relations Head</h2>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            <h1 className="text-bold text-xl my-4">Prathiba Narayan</h1>
                            <h2 className="font-normal text-gray-600 dark:text-gray-400">Design Head</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
