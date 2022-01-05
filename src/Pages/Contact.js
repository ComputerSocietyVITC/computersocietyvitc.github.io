import React from 'react'
import instagram from '../images/socialmedia/instagram.png'
import github from '../images/socialmedia/github.png'
import linkedin from '../images/socialmedia/linkedin.png'
import discord from '../images/socialmedia/discord.png'
import asteroid from "../images/asteroid.png";
import Mountains from "../components/Mountains";

const Contact = () => {
    return (
        <div>
            <div className="font-catamaran text-center my-5 text-black" id="outlinetext">
                <h1>CONTACT US</h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="pb-16 mt-10">
                    
                    <div>
                        <div className="sm:ml-40 mt-6 sm:mr-24">
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
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
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
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                                                        className="shadow-sm focus:ring-comsocgreen focus:border-comsocgreen mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"

                                                    />
                                                </div>

                                            </div>
                                        </div><br />
                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-comsocgreen hover:bg-comsocgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comsocgreen"
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
                <div className='relative'>
                   <img src={asteroid} alt="asteroid" style={{top:"-100px"}} />
                </div>
            </div>
            <Mountains />
        </div >
    )
}

export default Contact
