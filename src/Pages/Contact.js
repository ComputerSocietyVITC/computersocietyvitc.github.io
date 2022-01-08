import React from 'react'
import instagram from '../images/socialmedia/instagram.png'
import github from '../images/socialmedia/github.png'
import linkedin from '../images/socialmedia/linkedin.png'
import discord from '../images/socialmedia/discord.png'
import asteroid from "../images/asteroid.png";
import Mountains from "../components/Mountains";

const Contact = () => {
    return (
        <div className='relative z-10'>
            <div className="font-catamaran text-center lg:text-left my-5 lg:ml-28 text-black" id="outlinetext">
                <h1>CONTACT US</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="mx-5 pb-16 lg:mt-6 ">

                    <div>
                        <div className="sm:ml-40 sm:mr-24">
                            <div className="mt-5 md:mt-0 md:col-span-2 text-left">

                                <form>
                                    <div className="sm:rounded-md">

                                        <div className="col-span-6">
                                            <label htmlFor="name" className="block text-md font-medium text-white ">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="bg-gray-600  border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="email" className="block text-md font-medium text-white">
                                                Email ID
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                className="bg-gray-600 border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="subject" className="block text-md font-medium text-white">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                autoComplete="subject"
                                                className="bg-gray-600 border-0 mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="message" className="block text-md font-medium text-white">
                                                    Message
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={3}
                                                        className="bg-gray-600 border-0 shadow-sm focus:ring-comsocgreen focus:border-comsocgreen mt-1 block w-full sm:text-sm rounded-md"

                                                    />
                                                </div>

                                            </div>
                                        </div><br />
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="font-sans bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2  px-8 border border-transparent shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comsocgreen"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block ml-32 -mt-24'>
                    <img src={asteroid} alt="asteroid" />
                </div>
            </div>
            <Mountains />
        </div >
    )
}

export default Contact
