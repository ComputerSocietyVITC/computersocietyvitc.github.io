import React, { useRef } from 'react'

/* Profile Images */
import samank from '../images/samank.jpeg'
import tanay from '../images/tanay.jpeg'
import sanika from '../images/sanika.jpg'
import mainak from '../images/mainak.jpeg'
import swapnal from '../images/Swapnal.jpeg'
import tejas from '../images/tejas.jpeg'
import gunja from '../images/gunja.jpg'
import prathiba from '../images/prathiba.jpg'

import Mountains from '../components/Mountains'

const TeamMember = ({ name, designation, profileLink }) => {
    return (
        <div>
            <div className="rounded-full overflow-hidden " id="metallic">
                <img src={profileLink} className="h-48" alt="Person"></img>
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
        <div className='relative z-10'>
            <div className="font-catamaran text-center my-10 text-black" id="outlinetext">
                <h1>MEET THE TEAM</h1>
            </div>
            <div className="pt-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-52">
                    <div className="grid justify-items-center lg:justify-items-end">
                        <div >
                            <div className="rounded-full overflow-hidden " id="metallic">
                                <img src={samank} className="h-48 lg:h-60" alt="Person"></img>
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
                                <img src={tanay} className="h-48 lg:h-60" alt="Person"></img>
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
                        <TeamMember name="Sanika Kulkarni" designation="General Secretary" profileLink={sanika} />
                    </div>
                    <div className="grid justify-items-center">
                        <TeamMember name="Mainak Sengupta" designation="Technical Head" profileLink={mainak} />
                    </div>
                    <div className="grid justify-items-center lg:justify-items-start">
                        <TeamMember name="Swapnal Varma" designation="Joint General Secretary" profileLink={swapnal} />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:mb-24">
                    <div className="grid justify-items-center lg:justify-items-end ">
                        <TeamMember name="Tejas Vaichole" designation="Design Head" profileLink={tejas} />
                    </div>
                    <div className="grid justify-items-center">
                        <TeamMember name="Gunja Pandey" designation="Public Relations head" profileLink={gunja} />
                    </div>
                    <div className="grid justify-items-center lg:justify-items-start ">
                        <TeamMember name="Prathiba Narayan" designation="Design Head" profileLink={prathiba} />
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    )
}

export default Team
