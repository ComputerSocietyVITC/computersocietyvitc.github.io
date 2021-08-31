import React from 'react'
import { useRef } from 'react'
import storefront from "../images/storefront.svg";
import down from "../images/down.png"
import paradox from "../images/paradox.png"
import datahub from "../images/datahub.jpg"
import hackhub from "../images/hackhub.jpeg"
import expound from "../images/expound.jpg"

const Events = () => {
  const prRef = useRef(null)
    return (
        <div>
            <div className="h-full pt-20">
                <div className="grid grid-cols-2 gap-2">
                    <div className="sm:ml-40 mt-44">
                        <h1 className="text-6xl text-left"><span className="text-comsocgreen">Our</span> Events</h1>
                        <p className="text-2xl text-left mt-6">We are working on a few funded high-level projects in collaboration with various organisations to help the students gain industrial exposure and also get interesting internship opportunities.</p>
                    </div>
                    <div>
                        <img src={storefront} className="ml-32 w-4/6" alt="Events Image"></img>
                    </div>
                </div>
                <div className="flex justify-center mt-32">
                    <img
                        onClick={() => prRef.current.scrollIntoView({ behavior: "smooth" })}
                        src={down}
                        alt="down arrow"
                        className="w-12 h-12 items-center m-4"
                    />
                </div>
            </div>
            <div className="mx-40 pt-20">
                <div ref={prRef} className="grid grid-cols-2 gap-24" data-aos="fade-up">
                    <img src={hackhub} className="mt-12 h-85 w-65" alt="Hackhub"></img>
                    <div>
                        <h1 className="text-left text-comsocgreen text-3xl">HackHub Hackathon</h1><br />
                        <p className="text-left text-lg">Hack-Hub 2019 was IEEE Computer Society's flagship event at VIT Chennai. It provided a gigantic platform to lock horns with the greatest minds from all over the city. The competition had a massive cash prize prize pool of 1,00,000/- INR. There were a plethora of domains to test the participant’s brains and wits like Robotics,

Internet of Things, Embedded System, Machine Learning and Artificial Intelligence. It was held from 29/03/2019 to 30/03/2019. HackHub was entirely sponsored by Euro Exim Bank.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-32" data-aos="fade-left">
                    <div className="mt-12">
                        <h1 className="text-left text-comsocgreen text-3xl">Paradox Cryptic Hunt</h1><br />
                        <p className="text-left text-lg">Air conduction refers to sound from the outside carried by air waves from the outer ear and transferred to electrical waves in the inner ear. Bone conduction refers to sound conducted as subtle vibration along the bones to the inner ear housing the organs of hearing and balance. The sound vibration actually activates both the sense of hearing and the organ of balance. The vibration, in fact, is carried through the entire skeletal structure. We are working on a device which can facilitate this by using transducers.PARADOX was a two day online cryptic hunt organised by IEEE Computer Society of VIT Chennai. The 2021 edition of PARADOX will be held from 10 April 2021 12:00 AM IST to 11 April 2021 11:59 PM IST. The hunt consists of several questions in form of pictures and players would require to rack their brains to solve them and reach to an answer.

The goal of players should be to find the answer as fast as possible to stay on top of the leaderboard. At the end of two days the player at the top of leaderboard will be declared as the winner of PARADOX 2021.</p>
                    </div>
                    <img src={paradox} alt="Paradox"></img>
                </div>
                <div className="grid grid-cols-2 gap-24" data-aos="fade-right">
                    <img src={datahub} alt="Datahub"></img>
                    <div className="mt-12">
                        <h1 className="text-left text-comsocgreen text-3xl">DataHub Hackathon</h1><br />
                        <p className="text-left text-lg">We are working on a weather front end application for our college. In any front end application, the main goal is to make the user experience feel natural and intuitive. Since our application will be displayed around campus televisions we came up with a touchless interface. We use machine learning for gesture controls to control the interface without using touch. The interface is deployed on arm devices locally which are synchronized through cloud.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-32" data-aos="fade-left">
                    <div>
                        <h1 className="text-left text-comsocgreen text-3xl">Expound</h1><br />
                        <p className="text-left text-lg">EinNel Technologies in partnership with the IEEE Computer Society Student Branch Chapter at VIT Chennai organized the EXPOund Hackathon which engaged the students to brainstorm ideas and implement them successfully to solve the problems stated to win prizes worth Rs. 25,000. It was a great experience for the participants and the winners were awarded the opportunity to continue working on their innovative solutions under the guidance of EinNel Technologies.</p>
                    </div>
                    <img src={expound} alt="Live In Arcade"></img>
                </div>
            </div>
        </div>
    )
}

export default Events
