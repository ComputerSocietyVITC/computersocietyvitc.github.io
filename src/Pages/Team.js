import React, { useRef } from 'react'

import teamimage from "../images/teamimage.png"
import down from "../images/down.png"
import samank from '../images/samank.jpeg'
import Tanay from '../images/tanay.jpeg'
import Mountains from '../components/Mountains'

const Team = () => {

    const obRef = useRef(null)

    return (
        <div>
            <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                <h1>MEET THE TEAM</h1>
            </div>
            <div className="pt-1">
                <div className="grid grid-cols-2 gap-52">
                    <div className="grid justify-items-end ">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src={samank} className="h-60" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src={Tanay} className="h-60" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Tanay Bhadula</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-700">Vice President</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-20 my-24">
                    <div className="grid justify-items-end">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-20 mb-24">
                    <div className="grid justify-items-end">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-start">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" className="h-48" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-gray-600 dark:text-gray-400">President</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    )
}

export default Team
