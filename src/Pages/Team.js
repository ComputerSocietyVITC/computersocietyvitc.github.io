import React, { useRef } from 'react'

import teamimage from "../images/teamimage.png"
import down from "../images/down.png"
import samank from '../images/samank.jpeg'
import Tanay from '../images/tanay.jpeg'
import Mountains from '../components/Mountains'

const TeamMember = ({name,designation,profileLink}) =>{
    return(
        <div>
            <div className="rounded-full overflow-hidden " id="metallic">
                <img  src={profileLink} className="h-48" alt="Person"></img>
            </div>
            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                <h1 className="font-medium text-xl text-black">{name}</h1>
                <h2 className="font-normal text-black">{designation}</h2>
            </div>
        </div>
    )
}

const Team = () => {

    const obRef = useRef(null)

    return (
        <div>
            <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                <h1>MEET THE TEAM</h1>
            </div>
            <div className="pt-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-52">
                    <div className="grid justify-items-center lg:justify-items-end">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src={samank} className="h-48 lg:h-60" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Samank Gupta</h1>
                                <h2 className="font-normal text-black">President</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-center lg:justify-items-start">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img  src={Tanay} className="h-48 lg:h-60" alt="Person"></img>
                            </div>
                            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                                <h1 className="font-medium text-xl text-black">Tanay Bhadula</h1>
                                <h2 className="font-normal text-black">Vice President</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-20 lg:my-24 grid-cols-1">
                    <div className="grid  justify-items-center lg:justify-items-end">
                        <TeamMember name="Sanika Kulkarni" designation="General Secretary" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                    <div className="grid justify-items-center">
                        <TeamMember name="Mainak Sengupta" designation="Technical Head" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                    <div className="grid justify-items-center lg:justify-items-start">
                        <TeamMember name="Swapnal Varma" designation="Joint General Secretary" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:mb-24">
                    <div className="grid justify-items-center lg:justify-items-end ">
                        <TeamMember name="Tejas Vaichole" designation="Design Head" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                    <div className="grid justify-items-center">
                        <TeamMember name="Gunja Pandey" designation="Public Relations head" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                    <div className="grid justify-items-center lg:justify-items-start ">
                        <TeamMember name="Prathiba Narayan" designation="Design Head" profileLink="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"/>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    )
}

export default Team
