import React, { useRef, useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip';

/* Profile Images */
import samank from '../images/samank.jpeg'
import tanay from '../images/tanay.jpeg'
import sanika from '../images/sanika.jpg'
import mainak from '../images/mainak.jpeg'
import swapnal from '../images/Swapnal.jpeg'
import tejas from '../images/tejas.jpeg'
import gunja from '../images/gunja.jpg'
import prathiba from '../images/prathiba.jpg'
import comsocLogowhite from '../images/comsocLogowhite.png'

import Mountains from '../components/Mountains'
import OBList from '../components/bookdata/OBList';
import MembersList from '../components/bookdata/MembersList';
import Loader from "../components/loader/Loader";

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


const PageCover = ({ text }) => {
    return (
        <div className="w-full h-full font-sans bg-bgcolor1 border-2 border-black">
            <div className='py-32'>
                <img src={comsocLogowhite} alt="Comsoc logo" className='px-4' />
                <h2 className='text-2xl mt-20 text-comsocgreen uppercase'>{text}</h2>
            </div>
        </div>
    )
};

const Page = ({ year, members }) => {
    return (
        <div className="w-full h-full bg-bgcolor1 border-2 border-black">
            <div>
                <div className='text-3xl text-comsocgreen py-8'>{year}</div>
                {members ? members.map(mem => (
                    <p className='text-xl p-1'>{mem.Name} ({mem.Designation})</p>
                ))
                    : ''}
            </div>
        </div>
    )
};

const MemberPage = ({ members }) => {
    return (
        <div className="w-full h-full bg-bgcolor1 border-2 border-black">
            <div>
                <div className='text-3xl text-comsocgreen py-8'>2021 - 2022</div>
                {members ? members.map(mem => (
                    <p className='text-xl p-1'>{mem.Name} ({mem.Reg_No})</p>
                ))
                    : ''}
            </div>
        </div>
    )
};


const Team = () => {

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
    const obRef = useRef(null)

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
                    <div className="text-center">
                        <button
                            onClick={() => setModalDisplay(true)}
                            className="bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
                        >
                            Members List
                        </button>
                    </div>
                    <div className={'h-screen w-screen bg-transparent z-10 absolute' + (modalDisplay ? " block" : " hidden")}>
                        <div className='h-full w-full bg-black bg-opacity-80 z-20 fixed top-0'>
                            <div className="w-1/2 relative top-28 mx-auto">
                                <HTMLFlipBook
                                    width={340}
                                    height={500}
                                >
                                    <div className='w-full h-full'>
                                        <PageCover text="Members List" />
                                    </div>
                                    {OBList.map(ob =>
                                        <div className='w-full h-full'>
                                            <Page year={ob.Year} members={ob.Members} />
                                        </div>
                                    )}
                                    {MembersList.map(mem =>
                                        <div className='w-full h-full'>
                                            <MemberPage members={mem.PageList} />
                                        </div>
                                    )}
                                    <div className='w-full h-full'>
                                        <PageCover text="To be continued..." />
                                    </div>
                                </HTMLFlipBook>
                            </div>
                            <div className='z-20 relative -bottom-44 text-center'>
                                <button
                                    onClick={() => setModalDisplay(false)}
                                    className="bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
                                >
                                    Close List
                                </button>
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
