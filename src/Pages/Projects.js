import React, { useRef } from 'react'
import projectsimage from '../images/projectsimage.png'
import down from "../images/down.png"
import brain from "../images/brain.gif"
import bonetech from "../images/bonetech.gif"
import weather from "../images/weather.gif"
import LiveInArcade from "../images/LiveInArcade.gif"
import FallingBlocks from "../images/FallingBlocks.gif"
import Mountains from "../components/Mountains";

const Projects = () => {

    const prRef = useRef(null)

    return (
        <div>
            <div className="h-full pt-32">
                <div className="grid grid-cols-2 gap-2">
                    <div className="sm:ml-40 mt-44">
                        <h1 className="text-6xl text-left"><span className="text-comsocgreen">Our</span> Projects</h1>
                        <p className="text-2xl text-left mt-6">We are working on a few funded high-level projects in collaboration with various organisations to help the students gain industrial exposure and also get interesting internship opportunities.</p>
                    </div>
                    <div>
                        <img src={projectsimage} className="ml-32 w-4/6 mt-12" alt="Projects Image"></img>
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <img
                        onClick={() => prRef.current.scrollIntoView({ behavior: "smooth" })}
                        src={down}
                        alt="down arrow"
                        className="w-12 h-12 items-center m-4"
                    />
                </div>
            </div>
            <div ref={prRef} className="mx-48 pt-20">
                <div className="grid grid-cols-2 gap-24" data-aos="fade-up">
                    <img src={brain} className="mt-12" alt="Brain"></img>
                    <div>
                        <h1 className="text-left text-comsocgreen text-3xl">Brain Computer Interface</h1><br />
                        <p className="text-left text-lg">A brain-computer interface (BCI) is a technology that allows communication between a human or animal brain and an external technology. This term can refer to an interface that takes signals from the brain to an external piece of hardware, or a technology that sends signals to the brain. Various different brain-computer interface technologies have been developed at different times, through different methods and for diverse purposes, including in virtual reality technology.<br /><br />
                            We work on BCI using emotive device to analyze brain waves and to understand which brainwaves are generated during which activities.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-32" data-aos="fade-left">
                    <div className="mt-12">
                        <h1 className="text-left text-comsocgreen text-3xl">Bone Conduction</h1><br />
                        <p className="text-left text-lg">Air conduction refers to sound from the outside carried by air waves from the outer ear and transferred to electrical waves in the inner ear. Bone conduction refers to sound conducted as subtle vibration along the bones to the inner ear housing the organs of hearing and balance. The sound vibration actually activates both the sense of hearing and the organ of balance. The vibration, in fact, is carried through the entire skeletal structure. We are working on a device which can facilitate this by using transducers.</p>
                    </div>
                    <img src={bonetech} alt="Bone Tech"></img>
                </div>
                <div className="grid grid-cols-2 gap-24" data-aos="fade-right">
                    <img src={weather} alt="Weather"></img>
                    <div className="mt-12">
                        <h1 className="text-left text-comsocgreen text-3xl">Weather Application</h1><br />
                        <p className="text-left text-lg">We are working on a weather front end application for our college. In any front end application, the main goal is to make the user experience feel natural and intuitive. Since our application will be displayed around campus televisions we came up with a touchless interface. We use machine learning for gesture controls to control the interface without using touch. The interface is deployed on arm devices locally which are synchronized through cloud.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 my-32" data-aos="fade-left">
                    <div>
                        <h1 className="text-left text-comsocgreen text-3xl">Live In Arcade</h1><br />
                        <p className="text-left text-lg">With the roaring success of the Falling Blocks Game, IEEE Computer Society returned with an interactive controller based car racing game. Built on Unity 2D and using NodeMCU for the interaction between the sensor and the game,the players competed with each other, avoiding obstacles and trying to get the better of their opponent by using their skill on the wheel. The controllers were built to resemble real life steering wheels and the game was a huge success as an event.</p>
                    </div>
                    <img src={LiveInArcade} alt="Live In Arcade"></img>
                </div>
                <div className="grid grid-cols-2 gap-24 mb-32" data-aos="fade-right">
                    <img src={FallingBlocks} alt="Falling Blocks"></img>
                    <div>
                        <h1 className="text-left text-comsocgreen text-3xl">Falling Blocks Game</h1><br />
                        <p className="text-left text-lg">We worked on an interactive controller-based game to be displayed in our college tech fest. In the game, the player had to balance the falling blocks on a plate which could be controlled by moving a physical box with a gyroscope and accelerometer sensor in it. The game itself was built on Unity 2D and NodeMCU was used for the interaction between the sensor and the game.</p>
                    </div>
                </div>
            </div>
            <Mountains />
        </div>
    )
}

export default Projects
