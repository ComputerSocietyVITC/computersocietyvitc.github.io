import React, { useState, useEffect } from 'react'

import banner from '../images/banner.png'

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
import OBList from '../components/bookdata/OBList';
import MembersList from '../components/bookdata/MembersList';
import Loader from "../components/loader/Loader";

const TeamMember = ({ name, designation, profileLink }) => {
    return (
        <div>
            <div className="rounded-full overflow-hidden " id="metallic">
                <img src={profileLink} className="h-48" alt={name}></img>
            </div>
            <div className='rounded-md p-2 my-4 ' id='designation-bg'>
                <h1 className="font-medium text-xl text-black">{name}</h1>
                <h2 className="font-normal text-black">{designation}</h2>
            </div>
        </div>
    )
}

const Team = () => {

    const [memberSliderRef, setMemberSliderRef] = useState(null)
    const [modalDisplay, setModalDisplay] = React.useState(false)
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

    return (
        <div>
            {loading ? <Loader /> :
                (<div className='relative z-10'>
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
                    <div className="text-center mt-12 lg:mt-0">
                        <button
                            onClick={() => setModalDisplay(true)}
                            className="bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border lg:border-2 border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
                        >
                            Members List
                        </button>
                    </div>
                    <div className={'h-screen w-screen bg-transparent z-30 absolute' + (modalDisplay ? " block" : " hidden")} id="memberslist">
                        <div className='relative z-40'>
                            <button onClick={() => setModalDisplay(false)} className='fixed top-9 right-2 lg:right-52'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='h-full w-full bg-black bg-opacity-80 fixed top-0 overflow-y-scroll' id="memberCarousel">
                            <div className='mx-10 lg:mx-72 my-10 relative z-30'>
                                <div className='bg-gray-900 my-2 lg:my-4'>
                                    <img src={banner} alt="Banner" />
                                </div>
                                {OBList.map((ob) => (
                                    <div className='bg-gray-900 border lg:border-2 border-comsocgreen rounded-xl my-2 lg:my-4 py-4'>
                                        <h1 className='text-base lg:text-2xl font-semibold text-comsocgreen mb-4'>OB {ob.Year}</h1>
                                        <div className='grid grid-cols-2'>
                                            {ob.Members.map(mem => (
                                                <p className='text-xs lg:text-lg p-1'>{mem.Name} - {mem.Designation}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {MembersList.map((member) => (
                                    <div className='bg-gray-900 border lg:border-2 border-comsocgreen rounded-xl my-2 lg:my-4 py-4'>
                                        <h1 className='text-base lg:text-2xl font-semibold text-comsocgreen mb-4'>Members 2021 - 2022</h1>
                                        <div className='grid grid-cols-3'>
                                            {member.Members.map(mem => (
                                                <p className='text-xs lg:text-lg p-1'>{mem.Name}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className='bg-gray-900 my-2 lg:my-4' />
                                <div className='bg-gray-900 my-2 lg:my-4' />
                            </div>
                        </div>
                    </div>
                    <Mountains />
                </div >)
            }
        </div >
    )
}

export default Team
